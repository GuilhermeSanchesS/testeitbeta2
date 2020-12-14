package net.itbeta2teste.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.itbeta2teste.springbootbackend.model.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
