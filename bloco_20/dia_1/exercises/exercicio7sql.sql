SELECT  JOB_ID, SUM(salary) AS 'sum_salary'
FROM hr.employees
GROUP BY JOB_ID
ORDER BY 'sum_salary' DESC;