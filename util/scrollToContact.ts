export const scrollToContact = (): void =>
  document
    .getElementById('contact-form')
    ?.scrollIntoView({ behavior: 'smooth' })
