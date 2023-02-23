package com.moveswiththebros.moveswiththebros;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public List<Activity> getActivities() {
        return activityRepository.findAll();
    }

    public Optional <Activity> getOneActivity(Long activityId) {
        return activityRepository.findById(activityId);
    }

    public void addNewActivity(Activity activity) {
        activityRepository.save(activity);

    }
}
