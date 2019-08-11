package org.zerock.apitest.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class SampleController {


    @GetMapping(value="/")
    public String hello() {
        return "Hello World";
    }

}