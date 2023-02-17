package DigitalBooking.DigitalBooking.service;

import DigitalBooking.DigitalBooking.model.Categories;
import DigitalBooking.DigitalBooking.repository.CategoriesRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CategoriesService {

    private CategoriesRepository categoriesRepository;

    public void saveCategory(Categories categories){
        categoriesRepository.save(categories);
    }

    public List<Categories> findAllCategories(){
        return categoriesRepository.findAll();
    }

    public void editCategory(Integer id, String description){
        categoriesRepository.update(description, id);
    }

    public void deleteCategory(Integer id){
        categoriesRepository.deleteById(id);
    }






}
