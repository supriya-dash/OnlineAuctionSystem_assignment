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
import com.example.demo.model.Customer;
import com.example.demo.repository.CustomerRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/")
public class CustomerController {
	@Autowired
    private CustomerRepository customerRepository;
    
    @GetMapping("/customers")
    public List<Customer>getAllCustomer(){
        return customerRepository.findAll();
    }
    @PostMapping("/customers")
    public Customer createCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }
    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getSellerById(@PathVariable Integer id) {
        Customer customer = customerRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Customer not exists "+id));
        return ResponseEntity.ok(customer);
    }
    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Integer id,@RequestBody Customer customerUpdate){
        Customer customer= customerRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Customer not exists "+id));
        customer.setCustomerName(customerUpdate.getCustomerName());
        customer.setCustomerEmail(customerUpdate.getCustomerEmail());
        customer.setCustomerPassword(customerUpdate.getCustomerPassword());
        customer.setCustomerAddress(customerUpdate.getCustomerAddress());
        customer.setCustomerNumber (customerUpdate.getCustomerNumber());
        Customer updatedCustomer= customerRepository.save(customer);
        return ResponseEntity.ok(updatedCustomer);
    }
    @DeleteMapping("/customers/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteCustomer(@PathVariable Integer id){
        Customer customer = customerRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Customer not exists "+id));
        customerRepository.delete(customer);
        Map<String,Boolean> response= new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
    
}


