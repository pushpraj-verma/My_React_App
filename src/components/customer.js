@@ .. @@
 function CustomerList() {
   const [customers, setCustomers] = useState([]);
 
+  const handleDelete = (customerId) => {
+    if (window.confirm('Are you sure you want to delete this customer?')) {
+      setCustomers(customers.filter(customer => customer.id !== customerId));
+      alert('Customer deleted successfully!');
+    }
+  };
+
   useEffect(() => {
@@ .. @@
               <IconButton component={Link} to={`/editdetail/${customer.id}`} aria-label="more" size="large">
                 <Edit fontSize="inherit" />
               </IconButton>
-              <IconButton aria-label="delete" size="large">
  )
}stomer.id)}>
              <IconButton aria-label="delete" size="large" onClick={() => handleDelete(customer.id)}>
                 <DeleteIcon fontSize="inherit" />
               </IconButton>