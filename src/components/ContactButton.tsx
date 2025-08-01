'use client';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { type FormSchema, contactFormSchema } from '@/schemas/contactMe.dtos';
import { zodResolver } from '@hookform/resolvers/zod';

export function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
    setOpen(false);
    form.reset();
  };

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
      <SheetContent side="left" className="max-w-md z-70 w-full flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-center font-bold text-2xl">Contact Me</SheetTitle>
        </SheetHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full px-6 pb-4 space-4">
            <div className="flex flex-col space-y-4 flex-grow">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="test@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col flex-grow">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message..."
                        {...field}
                        className="flex-grow overflow-y-auto resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <SheetFooter className="mt-auto py-4 px-0">
              <Button type="submit" className="w-full cursor-pointer">
                Send Message
              </Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
