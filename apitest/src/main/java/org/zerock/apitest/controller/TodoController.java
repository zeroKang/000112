package org.zerock.apitest.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.apitest.domain.Todo;
import org.zerock.apitest.repository.TodoRepository;

import lombok.AllArgsConstructor;
import lombok.extern.java.Log;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/todos/")
@AllArgsConstructor
@Log
public class TodoController {


    private TodoRepository repository;

    @PostMapping(value="/new")
    public ResponseEntity<String> addTodo(@RequestBody Todo todo) {

        log.info("add Todo " );

        repository.save(todo);

        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @GetMapping(value="/{tno}")
    public ResponseEntity<Todo> getMethodName(@PathVariable("tno") Long tno ) {

        log.info("tno: " + tno);

        return new ResponseEntity<Todo>(repository.findById(tno).get(), HttpStatus.OK);
    }
    


    


}