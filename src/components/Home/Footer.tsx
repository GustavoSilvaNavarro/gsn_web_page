'use client';

import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

import { personalDetails } from '@/utils/constants';

export const Footer = () => {
  const { shortName, footer } = personalDetails;

  return (
    <footer className="bg-content1 py-12">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
            <p className="text-foreground-600 mb-4">{footer.description}</p>
            <div className="flex gap-4">
              {footer.socialLinks.map((social, index) => (
                <a
                  key={index}
                  aria-label={social.platform}
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Icon icon={social.icon} width="24" height="24" />
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-start-4 md:col-span-1">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-foreground-600">
              <li className="flex items-center gap-2">
                <Icon icon="lucide:mail" />
                <a href={`mailto:${footer.contact.email}`} className="min-w-0 break-words">
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon icon="lucide:map-pin" />
                {footer.contact.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-divider pt-8 text-center text-foreground-500">
          <p>
            © {new Date().getFullYear()} {shortName}. made with &hearts;.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
