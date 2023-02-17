package DigitalBooking.DigitalBooking.controller;

import DigitalBooking.DigitalBooking.model.Categories;
import DigitalBooking.DigitalBooking.service.CategoriesService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(value = "/Categories")
public class CategoriesController {
    private CategoriesService categoriesService;

    @GetMapping("/list")
    public ResponseEntity<List<Categories>> findAll() {
        return new ResponseEntity<>(categoriesService.findAllCategories(),null,HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody Categories categories){
        categoriesService.saveCategory(categories);
        return new ResponseEntity<>("Category save",null, HttpStatus.CREATED);
    }

    @Transactional
    @PutMapping("/update/{id}")
    public ResponseEntity<String> update(@PathVariable Integer id, @RequestBody String description){
        categoriesService.editCategory( id, description);
        return new ResponseEntity<>("Category update", null, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id){
        categoriesService.deleteCategory(id);
        return new ResponseEntity<>("Category delete", null, HttpStatus.OK);
    }
}
