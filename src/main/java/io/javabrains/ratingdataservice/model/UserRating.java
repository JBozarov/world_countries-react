package io.javabrains.ratingdataservice.model;

import java.util.List;

public class UserRating {

    private List<Rating> ratings;

    public UserRating () {}

    public UserRating(List<Rating> userRating) {
        this.ratings = userRating;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }
}