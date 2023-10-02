package com.inrsystem.service.impl;

import cn.crowdos.kernel.resource.Participant;
import cn.crowdos.kernel.resource.Task;
import com.inrsystem.dao.*;

import com.inrsystem.service.CrowdOsService;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component
public class CrowdOsServiceImpl implements CrowdOsService {
    final CrowdKernelComponent crowdKernelComponent;

    public CrowdOsServiceImpl(CrowdKernelComponent crowdKernelComponent) {
        this.crowdKernelComponent = crowdKernelComponent;
    }


    public void registerParticipant(Company company) {
        crowdKernelComponent.getKernel().registerParticipant(company);
    }

    public void registerParticipant(Administrators administrators) {
        crowdKernelComponent.getKernel().registerParticipant(administrators);
    }

    public void registerParticipant(TeamMembers teamMembers) {
        crowdKernelComponent.getKernel().registerParticipant(teamMembers);
    }

    public List<TeamMembers> getTaskRecommendation(Event event) {
        ArrayList<TeamMembers> users = new ArrayList<>();
        List<Participant> taskRecommendationScheme = crowdKernelComponent.getKernel().getTaskRecommendationScheme((Task) event);
        for (Participant participant : taskRecommendationScheme) {
            users.add((TeamMembers) participant);
        }
        return users;
    }
}
