import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  IconButton,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";

const DonationForm = ({ Icon, text, color }) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    amount: "",
    paymentMethod: "Mpesa",
    // clothingType: "",
    foodType: "",
    volunteerRole: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleTabChange = (_, newValue) => setActiveTab(newValue);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    handleClose();
  };

  return (
    <>
      {/* Donate Button */}
      <Button
        onClick={handleOpen}
        variant="contained"
        color={color ? color : "warning"}
        startIcon={Icon ? <Icon /> : <FavoriteIcon />}
      >
        {text}
      </Button>

      {/* Donation Popup Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>
          Support Our Cause
          <IconButton
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {/* Tabs for Donation Categories */}
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Money" />
            {/* <Tab label="Clothes" /> */}
            <Tab label="Food" />
            <Tab label="Volunteer" />
          </Tabs>

          <form onSubmit={handleSubmit} style={{ marginTop: 16 }}>
            {/* Common Fields: Name & Phone */}
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              fullWidth
              required
              margin="normal"
            />

            {/* Tab-Specific Fields */}
            {activeTab === 0 && (
              <>
                <TextField
                  label="Donation Amount (KSH)"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  type="number"
                  fullWidth
                  required
                  margin="normal"
                />
                <TextField
                  select
                  label="Payment Method"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                >
                  <MenuItem value="Mpesa">M-Pesa</MenuItem>
                  <MenuItem value="Card">Credit/Debit Card</MenuItem>
                  <MenuItem value="Paypal">PayPal</MenuItem>
                </TextField>
              </>
            )}

            {/* {activeTab === 1 && (
              <TextField
                label="Type of Clothes (e.g., Shirts, Jackets)"
                name="clothingType"
                value={formData.clothingType}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
            )} */}

            {activeTab === 2 && (
              <TextField
                label="Type of Food (e.g., Rice, Canned Goods)"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
            )}

            {activeTab === 3 && (
              <TextField
                label="Preferred Volunteer Role"
                name="volunteerRole"
                value={formData.volunteerRole}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
              />
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="warning"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DonationForm;
