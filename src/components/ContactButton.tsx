'use client';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useState } from 'react';

export function FloatingContactButton() {
  const initialForm = { email: '', name: '', subject: '', message: '' };
  const [formDate, setFormDate] = useState(initialForm);
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 right-6 z-60 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 text-white w-16 h-16"
          aria-label="Contact">
          <Mail className="w-7 h-7" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="max-w-md z-70 w-full">
        <SheetHeader>
          <SheetTitle>Contact Me</SheetTitle>
        </SheetHeader>

        <div>
          <form>
            <div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="test@gmail.com"
                  required
                  className="input input-bordered"
                />
              </div>
              <div>
                <label>Name</label>
                <input type="text" name="name" placeholder="John Doe" required className="input input-bordered" />
              </div>
            </div>
            <div>
              <label>Subject</label>
              <input type="text" name="subject" placeholder="Subject" required className="input input-bordered" />
            </div>
            <div>
              <label>Subject</label>
              <textarea name="message" placeholder="Your message..." required className="textarea textarea-bordered" />
            </div>
          </form>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
