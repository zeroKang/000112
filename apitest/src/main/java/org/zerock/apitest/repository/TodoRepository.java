package org.zerock.apitest.repository;

import org.springframework.data.repository.CrudRepository;
import org.zerock.apitest.domain.Todo;

public interface TodoRepository extends CrudRepository<Todo, Long>{

}