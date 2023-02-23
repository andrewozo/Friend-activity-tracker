package com.moveswiththebros.moveswiththebros;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "/activities")
public class ActivityController {

    private final ActivityService activityService;
    @Autowired
    public ActivityController(ActivityService activityService){this.activityService = activityService;}

    @GetMapping()
    public List<Activity> getActivities(){
        return activityService.getActivities();
    }

    @GetMapping(path = "{activityId}")
    public Optional <Activity> getOneActivity(@PathVariable("activityId") Long activityId){
        return activityService.getOneActivity(activityId);

    }

    @PostMapping
    public void addActivity(@RequestBody Activity activity){activityService.addNewActivity(activity);}
}
