import React, { useMemo, useRef, useState, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Welcome to Davis Brothers Plumbing. How can we help you today? Ask about repairs, new construction, or schedule a service.",
      timestamp: Date.now(),
    },
  ]);

  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (viewportRef.current) {
      viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simple concierge response for now (stub). Could be wired to an API later.
    const replyText = getAssistantReply(text);
    const assistantMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: replyText,
      timestamp: Date.now() + 1,
    };

    // Simulate slight delay for realism
    setTimeout(() => setMessages((prev) => [...prev, assistantMsg]), 450);
  };

  const headerGlow = "shadow-[0_0_30px]";

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Action Button */}
      {!open && (
        <button
          aria-label="Open chat"
          onClick={() => setOpen(true)}
          className="group relative flex items-center gap-2 rounded-full border border-primary/30 bg-[hsl(var(--card))] text-foreground px-5 py-3 shadow-glow backdrop-blur-md transition-all hover:scale-[1.03] hover:border-primary/50"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 transition-opacity group-hover:opacity-10" />
          <MessageCircle className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium tracking-wide">Chat with us</span>
        </button>
      )}

      {/* Chat Panel */}
      {open && (
        <div
          className="w-[90vw] max-w-[360px] overflow-hidden rounded-2xl border border-border/60 bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-elegant backdrop-blur-xl animate-slide-up"
        >
          {/* Header */}
          <div className={`relative flex items-center justify-between px-4 py-3 bg-[hsl(var(--card))] border-b border-border/60 ${headerGlow}`}>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-wide">Support</div>
                <div className="text-[11px] text-muted-foreground">Davis Brothers</div>
              </div>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            {/* Subtle glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-t-2xl ring-1 ring-primary/10" />
          </div>

          {/* Messages */}
          <div
            ref={viewportRef}
            className="max-h-[50vh] overflow-y-auto px-4 py-3 bg-[linear-gradient(180deg,hsl(var(--popover)_/_96%)_0%,hsl(var(--card)_/_96%)_100%)]"
          >
            {messages.map((m) => (
              <div key={m.id} className="mb-3">
                <div
                  className={
                    m.role === "user"
                      ? "ml-auto max-w-[85%] rounded-xl rounded-br-sm bg-primary text-primary-foreground px-3 py-2 text-sm shadow-glow"
                      : "mr-auto max-w-[90%] rounded-xl rounded-bl-sm border border-border/60 bg-[hsl(var(--card))] px-3 py-2 text-sm text-foreground/90"
                  }
                >
                  {m.content}
                </div>
                <div className="mt-1 text-[10px] text-muted-foreground">
                  {formatTime(m.timestamp)}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border/60 bg-[hsl(var(--card))] p-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about repairs, new construction, or schedule a service..."
                rows={1}
                className="min-h-[42px] max-h-[120px] grow resize-none rounded-xl border border-border/60 bg-[hsl(var(--popover))] px-3 py-2 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:border-primary/40 focus:shadow-glow"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                disabled={!input.trim()}
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

function formatTime(ts: number) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getAssistantReply(userText: string) {
  const t = userText.toLowerCase();
  if (/(price|cost|quote)/.test(t)) {
    return "Pricing depends on the job. We offer free estimates for new construction and competitive rates for repairs. Please describe your issue or call us for a quote.";
  }
  if (/(book|schedule|appointment|when)/.test(t)) {
    return "We offer flexible scheduling across Central Florida. Call us at (954) 778-7238 to book an appointment.";
  }
  if (/(repair|leak|clog|water heater)/.test(t)) {
    return "We handle all types of repairs including leaks, clogs, and water heater issues. We are licensed and insured (CFC1433833 | CFC1433848).";
  }
  if (/(location|where|area|serve)/.test(t)) {
    return "We are based in Orlando and serve all of Central Florida, from Altamonte Springs to Winter Springs.";
  }
  return "Thanks for reaching out! To help you faster, please describe your plumbing issue or the service you need, and we'll get back to you.";
}

export default Chatbot;
