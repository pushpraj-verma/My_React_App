const EditDetail = () => {
  const { id } = useParams(); // Get the ID from the route parameter
  const navigate = useNavigate();
  const [customerData, setCustomerData] = useState({});