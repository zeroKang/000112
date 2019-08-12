package org.zerock.apitest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.apitest.domain.Todo;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
public class SampleController {


    @GetMapping(value="/")
    public String hello() {
        return "Hello World";
    }

    @GetMapping(value="/test")
    public Todo getMethodName() {

        Todo todo  = new Todo();
        todo.setTitle("Sample....");
        todo.setTno(3L);
        
        return todo;
    }
    

}