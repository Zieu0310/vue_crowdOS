package com.inrsystem;


import com.inrsystem.mapper.EventMapper;
import com.inrsystem.quart.SelectWinner;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@SpringBootTest
class InrSystemApplicationTests {

	@Test
	void contextLoads() {
	}


}
