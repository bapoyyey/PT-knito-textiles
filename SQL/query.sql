USE classicmodels;
SELECT o.customerNumber, COUNT(p.productLine) AS totalProductLineCount
FROM orders o
JOIN orderdetails od ON o.orderNumber = od.orderNumber
JOIN products p ON od.productCode = p.productCode
WHERE p.productLine = 'Classic Cars'
GROUP BY o.customerNumber
HAVING totalProductLineCount > 23;

