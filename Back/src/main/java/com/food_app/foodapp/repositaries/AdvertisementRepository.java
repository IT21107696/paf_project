package com.food_app.foodapp.repositaries;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.food_app.foodapp.model.Advertisement;

public interface AdvertisementRepository extends MongoRepository<Advertisement, String> {
}