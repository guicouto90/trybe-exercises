SELECT  JOB_ID, SUM(salary) AS 'sum_salary'
FROM hr.employees
WHERE JOB_ID = 'IT_PROG'
GROUP BY JOB_ID
ORDER BY 'sum_salary' DESC;