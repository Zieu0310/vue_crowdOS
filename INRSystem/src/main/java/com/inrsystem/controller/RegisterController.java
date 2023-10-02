package com.inrsystem.controller;

import com.inrsystem.dao.*;
import com.inrsystem.enums.ErrorEnum;
import com.inrsystem.exception.LocalRunTimeException;
import com.inrsystem.mapper.AdministratorsMapper;
import com.inrsystem.mapper.CompanyMapper;
import com.inrsystem.mapper.TeamMapper;
import com.inrsystem.mapper.TeamMembersMapper;

import com.inrsystem.service.CrowdOsService;
import jakarta.annotation.Resource;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@Slf4j
@RestController
public class RegisterController {
    final CrowdKernelComponent crowdKernelComponent;
    @Resource
    private TeamMembersMapper teamMembersMapper;
    @Resource
    private CompanyMapper companyMapper;
    @Resource
    private AdministratorsMapper administratorsMapper;
    @Resource
    private TeamMapper teamMapper;
    @Resource
    private CrowdOsService crowdOsService;

    public RegisterController(CrowdKernelComponent crowdKernelComponent) {
        this.crowdKernelComponent = crowdKernelComponent;
    }

    //注册
    @PostMapping("/register")
    public Boolean Register(@RequestBody Map<String,Object> map){
        String account = map.get("account").toString();
        String password = map.get("password").toString();
        int role = Integer.parseInt(map.get("role").toString());
        String name = map.get("name").toString();
        String email = map.get("email").toString();
        //管理员
        if(role==0){
            Administrators administrators = new Administrators();
            administrators.setAccount(account);
            administrators.setPassword(password);
            administrators.setRole(role);
            administrators.setName(name);
            administrators.setEmail(email);
            int insert = administratorsMapper.insert(administrators);
           crowdOsService.registerParticipant(administrators);
            if(insert==0){
                throw new LocalRunTimeException(ErrorEnum.ERROR_INSERT);
            }
            return (insert!=0)?true:false;
        }
        //公司
        if(role==1){
            Company company = new Company();
            company.setAccount(account);
            company.setPassword(password);
            company.setRole(role);
            company.setName(name);
            company.setEmail(email);
            int insert = companyMapper.insert(company);
           crowdOsService.registerParticipant(company);
            if(insert==0){
                throw new LocalRunTimeException(ErrorEnum.ERROR_INSERT);
            }
            return (insert!=0)?true:false;
        }
        //科研人员
        if(role==2){
            TeamMembers teamMembers = new TeamMembers();
            teamMembers.setAccount(account);
            teamMembers.setPassword(password);
            teamMembers.setEmail(email);
            teamMembers.setRole(role);
            teamMembers.setName(name);
            String teamName = map.get("teamName").toString();
            Team team =new Team();
            team.setName(teamName);
            int insert1 = teamMapper.insert(team);
            teamMembers.setTeamId(team.getId());
            int insert = teamMembersMapper.insert(teamMembers);
           crowdOsService.registerParticipant(teamMembers);

            if(insert==0||insert1==0){
                throw new LocalRunTimeException(ErrorEnum.ERROR_INSERT);
            }
            return (insert!=0)?true:false;
        }
        return null;
    }
}
