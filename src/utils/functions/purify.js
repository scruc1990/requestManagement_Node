export const purify = (body) => {
    const regex = [/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|CREATE|ALTER|EXEC|EXECUTE|--|;|')\b)/gi,
        /(['"]).*\1.*\1/, 
/['"].*?(OR|AND).*?['"]/, 
/(\b(OR|AND)\b.*?(=|LIKE).*?['"])/gi,
];

    if (typeof body === 'string') {
        return regex.some((pattern) => pattern.test(body));
      } else if (typeof body === 'object' && body !== null) {
      
        for (const key in body) {
          if (purify(body[key])) return true;
        }
      }
      return false;
};