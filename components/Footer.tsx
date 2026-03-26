import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, MapPin, ExternalLink, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, NAV_LINKS } from '../constants';

/**
 * Footer Component
 * Production-grade footer with full sitemap, legal links, contact info,
 * social links, and current year copyright notice.
 * WCAG 2.1 AA compliant with proper ARIA labels and keyboard nav.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = NAV_LINKS.filter(link => !link.href.startsWith('http'));
  const externalLinks = [
    { name: 'Blog (Medium)', href: 'https://medium.com/@ypkapure74' },
    { name: 'GitHub Profile', href: 'https://github.com/yashkapure-25' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/yash-kapure-full-stack-developer/' },
    { name: 'Credly Badges', href: 'https://www.credly.com/users/yash-kapure' },
  ];

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="relative border-t border-white/5 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, rgba(5,8,17,0), rgba(5,8,17,0.98))' }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* ── Main Footer Grid ───────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Column 1: Brand & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <a
              href="#"
              className="font-mono text-2xl font-bold text-gradient-rainbow inline-block mb-4 focus-visible:outline-2"
              aria-label="Yash Kapure – Back to top"
            >
              Yash Kapure
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              AWS &amp; DevOps Engineer passionate about building scalable cloud
              infrastructure, automating pipelines, and modernizing deployments.
            </p>

            {/* Contact Quick Info */}
            <ul className="space-y-2" aria-label="Contact information">
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-accent-pink shrink-0" aria-hidden="true" />
                <a
                  href="mailto:kapure.yashp25@gmail.com"
                  className="hover:text-white transition-colors truncate focus-visible:outline-2"
                  aria-label="Email Yash at kapure.yashp25@gmail.com"
                >
                  kapure.yashp25@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-accent-blue shrink-0" aria-hidden="true" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Column 2: Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 group focus-visible:outline-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-blue group-hover:scale-150 transition-transform" aria-hidden="true" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          {/* Column 3: External Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              External
            </h3>
            <ul className="space-y-2.5">
              {externalLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5 group focus-visible:outline-2"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    <ExternalLink
                      size={12}
                      className="text-accent-cyan group-hover:scale-110 transition-transform shrink-0"
                      aria-hidden="true"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Legal Links */}
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mt-7 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5">
              <li>
                <span className="text-sm text-gray-500 cursor-default">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-gray-500 cursor-default">
                  Terms of Service
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Social Links & Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              Connect
            </h3>

            {/* Social Icons Grid */}
            <div className="flex flex-wrap gap-3 mb-6" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="listitem"
                    aria-label={`Visit Yash on ${social.name} (opens in new tab)`}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-accent-blue hover:to-accent-cyan hover:-translate-y-1 hover:border-accent-blue/30 transition-all duration-300 focus-visible:outline-2"
                  >
                    <Icon size={16} aria-hidden="true" />
                  </a>
                );
              })}
            </div>

            {/* Resume Download CTA */}
            <a
              href="/Yash-Pramod-Kapure-Resume.pdf"
              download="Yash-Pramod-Kapure-Resume.pdf"
              aria-label="Download Yash Kapure's resume as PDF"
              className="btn-gradient text-white text-sm font-bold py-2.5 px-5 rounded-full inline-flex items-center gap-2 hover:-translate-y-1 transition-transform focus-visible:outline-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* ── Divider ─────────────────────────────────────── */}
        <div className="border-t border-white/5 mb-6" role="separator" aria-hidden="true" />

        {/* ── Bottom Bar ──────────────────────────────────── */}
        <div className="relative flex items-center justify-center">

          {/* Copyright — always centred */}
          <p className="text-gray-500 text-xs text-center">
            &copy; {currentYear}{' '}
            <span className="text-gray-400 font-medium">Yash Kapure</span>. All rights reserved.
            &nbsp;Made with{' '}
            <Heart
              size={12}
              className="inline text-accent-pink fill-accent-pink"
              aria-label="love"
            />{' '}
            in Mumbai, India.
          </p>

          {/* Scroll to Top — pinned to the right */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent-blue/20 hover:border-accent-blue/40 transition-all duration-300 focus-visible:outline-2"
            aria-label="Scroll back to top of the page"
            title="Scroll to top"
          >
            <ArrowUp size={16} aria-hidden="true" />
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;