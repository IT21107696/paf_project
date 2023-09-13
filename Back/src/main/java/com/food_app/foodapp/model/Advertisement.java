package com.food_app.foodapp.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "advertisements")
public class Advertisement {
    @Id
    private String id;
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    private String caption;
    private String visitLink;
    private String imageUrl;
    public String getCaption() {
        return caption;
    }
    public void setCaption(String caption) {
        this.caption = caption;
    }
    public String getVisitLink() {
        return visitLink;
    }
    public void setVisitLink(String visitLink) {
        this.visitLink = visitLink;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    // Constructors, getters, and setters
}