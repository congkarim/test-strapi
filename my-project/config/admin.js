module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '263b5c56fc8583dd6f8d1358b163fdde'),
  },
});
