export default (req, res) => {
  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');
  console.log('date:', date);
  res.json({ date });
};
