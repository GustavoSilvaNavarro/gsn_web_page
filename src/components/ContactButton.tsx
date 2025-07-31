// Add this to your main layout or Home component

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react'; // Or any icon you prefer
import { useState } from 'react';

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white w-16 h-16"
          aria-label="Contact">
          <Mail className="w-7 h-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        {/* Replace this with your contact form or email link */}
        <form
          className="flex flex-col gap-4"
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree or backend endpoint
          method="POST">
          <input type="email" name="email" placeholder="Your email" required className="input input-bordered" />
          <textarea name="message" placeholder="Your message" required className="textarea textarea-bordered" />
          <Button type="submit" className="w-full">
            Send
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
