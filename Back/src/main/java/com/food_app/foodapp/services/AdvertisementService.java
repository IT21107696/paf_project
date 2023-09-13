package com.food_app.foodapp.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food_app.foodapp.model.Advertisement;
import com.food_app.foodapp.repositaries.AdvertisementRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdvertisementService {
    private final AdvertisementRepository advertisementRepository;

    @Autowired
    public AdvertisementService(AdvertisementRepository advertisementRepository) {
        this.advertisementRepository = advertisementRepository;
    }

    public List<Advertisement> getAllAdvertisements() {
        return advertisementRepository.findAll();
    }

    public Optional<Advertisement> getAdvertisementById(String id) {
        return advertisementRepository.findById(id);
    }

    public Advertisement createAdvertisement(Advertisement advertisement) {
        return advertisementRepository.save(advertisement);
    }

    public Advertisement updateAdvertisement(String id, Advertisement advertisement) {
        Optional<Advertisement> existingAdvertisement = advertisementRepository.findById(id);
        if (existingAdvertisement.isPresent()) {
            Advertisement updatedAdvertisement = existingAdvertisement.get();
            updatedAdvertisement.setCaption(advertisement.getCaption());
            updatedAdvertisement.setVisitLink(advertisement.getVisitLink());
            updatedAdvertisement.setImageUrl(advertisement.getImageUrl());
            return advertisementRepository.save(updatedAdvertisement);
        }
        return null;
    }

    public boolean deleteAdvertisement(String id) {
        if (advertisementRepository.existsById(id)) {
            advertisementRepository.deleteById(id);
            return true;
        }
        return false;
    }
}