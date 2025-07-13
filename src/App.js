@@ .. @@
 import EditDetail from './components/editdetail';
 import Clist from './components/customer';
+import ProductList from './components/product';
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
@@ .. @@
           <Route path="/dashboard" element={<Dboard />} />
           <Route path="/editdetail" element={<EditDetail />} />
           <Route path="/customer" element={<Clist />} />
+          <Route path="/product" element={<ProductList />} />
           <Route path="/editdetail/:id" element={<EditDetail />} />