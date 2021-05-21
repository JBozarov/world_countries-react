package io.javabrains.ratingdataservice.resources;

import io.javabrains.ratingdataservice.model.Rating;
import io.javabrains.ratingdataservice.model.UserRating;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/ratingsdata")
public class RatingDataResource {

  @GetMapping("/{movieId}")
  public Rating getRating(@PathVariable("movieId") String movieId) {
    return new Rating(movieId, 4);
  }

  @GetMapping("user/{userId}")
  public UserRating getUserRating(@PathVariable("userId") String userId) {
    System.out.println("rating hit user id " + userId);
    List<Rating> ratings = Arrays.asList(
            new Rating("223", 4),
            new Rating("504", 3));

    UserRating userRating = new UserRating();
    userRating.setRatings(ratings);
    return userRating;
  }
}
