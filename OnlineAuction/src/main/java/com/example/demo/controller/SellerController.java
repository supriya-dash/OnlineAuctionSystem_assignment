package com.example.demo.controller;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Seller;
import com.example.demo.repository.SellerRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/")
public class SellerController{
@Autowired
private SellerRepository sellerRepository;

@GetMapping("/sellers")
public List<Seller>getAllSeller(){
	return sellerRepository.findAll();
}

//register seller
@PostMapping("/sellers")
public Seller createSeller(@RequestBody Seller seller) {
	return sellerRepository.save(seller);
}
@GetMapping("/sellers/{id}")
public ResponseEntity<Seller> getSellerById(@PathVariable Long id){
	Seller seller=sellerRepository.findById(id)
			.orElseThrow(()-> new ResourceNotFoundException("Seller not exists "+id));
	return ResponseEntity.ok(seller);
}

//update product details

@PutMapping("/sellers/{id}")
public ResponseEntity<Seller> updateProduct(@PathVariable Long id,@RequestBody Seller sellerProduct){
    Seller seller = sellerRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("Seller not exists "+id));
    seller.setProductID (sellerProduct.getProductID());
    seller.setProductName(sellerProduct.getProductName());
    seller.setProductDescription(sellerProduct.getProductDescription());
    seller.setProductStartamt (sellerProduct.getProductStartamt());
    seller.setProductPrice (sellerProduct.getProductPrice());
    seller.setProductBiddingdate (sellerProduct.getProductBiddingdate());
    seller.setProductCategory (sellerProduct.getProductCategory());
    Seller updatedProduct= sellerRepository.save(seller);
    return ResponseEntity.ok(updatedProduct);
}

@PutMapping("/sellers/productlist/{id}")
public ResponseEntity<Seller> deleteProduct(@PathVariable Long id,@RequestBody Seller sellerProduct){
    Seller seller = sellerRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("Seller not exists "+id));
    seller.setProductID (null);
    seller.setProductName(null);
    seller.setProductDescription(null);
    seller.setProductStartamt (null);
    seller.setProductPrice (null);
    seller.setProductBiddingdate (null);
    seller.setProductCategory (null);
    Seller updatedProduct= sellerRepository.save(seller);
    return ResponseEntity.ok(updatedProduct);
}

//delete seller
@DeleteMapping("/sellers/{id}")
public ResponseEntity<Map<String,Boolean>> deleteSeller(@PathVariable Long id){
    Seller seller = sellerRepository.findById(id)
            .orElseThrow(()-> new ResourceNotFoundException("Seller not exists "+id));
    sellerRepository.delete(seller);
    Map<String,Boolean> response= new HashMap<>();
    response.put("deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
}
	
}
