DELETE p FROM Person p
JOIN Person p2 ON p.email = p2.email
WHERE p.id > p2.id;