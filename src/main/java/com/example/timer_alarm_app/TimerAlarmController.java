package com.example.timer_alarm_app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TimerAlarmController {

    @GetMapping("/")
    public String index() {
        return "index"; // templates/index.html 렌더링
    }
}
