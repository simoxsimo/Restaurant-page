const contactPage = (() => {
  // returns a string
  const title = () => 'Contact';
  const address = () => '1 Derb Aarjane, MARRAKECH MEDINA. MOROCCO';
  const telephone = () => 'Tel: +212 5 24 38 16 09';
  const email = () => 'info@nomadmarrakech.com';

  return {
    title, address, telephone, email,
  };
})();

export default contactPage;