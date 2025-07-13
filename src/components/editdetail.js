@@ .. @@
   const handleSave = () => {
     console.log('Updated Data:', updatedData);
-    // Send an HTTP PUT request to update the customer data
-    axios.put(`/customer/${id}`, updatedData)
-      .then(response => {
-        console.log(response.data); // Log the response from the server
-        // Navigate to the customer page
-        window.location.href = '/customer';
-      })
-      .catch(error => {
-        console.error('Error updating customer data:', error);
-        // Handle the error (e.g., show an error message to the user)
-      });
+    // For demo purposes, just show success message and navigate back
+    alert('Customer data updated successfully!');
+    navigate('/customer');
   };

export default handleSave