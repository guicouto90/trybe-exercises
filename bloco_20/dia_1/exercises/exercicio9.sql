SELECT  JOB_ID, AVG(salary) AS 'avarage_salary'
FROM hr.employees
WHERE JOB_ID <> 'IT_PROG'
GROUP BY JOB_ID
ORDER BY 'avarage_salary' DESC;