import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Video } from 'lucide-react';

const getAvailableTimeSlots = () => {
  return ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30'];
};

export default function ConsultationBooking({ service, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', message: '' });

  const timeSlots = getAvailableTimeSlots();

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !customerInfo.name || !customerInfo.email) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Free consultation booked for ${selectedDate.toLocaleDateString()} at ${selectedTime}. You will receive a confirmation email with the video call link.`);
    onClose();
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Book {service.title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}><X className="w-4 h-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>Choose Date</Label>
          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} disabled={(date) => date < new Date()} className="rounded-md border" />
        </div>
        <div>
          <Label htmlFor="time">Choose Time</Label>
          <Select value={selectedTime} onValueChange={setSelectedTime}>
            <SelectTrigger><SelectValue placeholder="Select time slot" /></SelectTrigger>
            <SelectContent>{timeSlots.map(time => (<SelectItem key={time} value={time}>{time}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={customerInfo.name} onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})} placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={customerInfo.email} onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})} placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={customerInfo.phone} onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})} placeholder="Enter your phone number" />
          </div>
          <div>
            <Label htmlFor="message">What would you like to discuss? (Optional)</Label>
            <Input id="message" value={customerInfo.message} onChange={(e) => setCustomerInfo({...customerInfo, message: e.target.value})} placeholder="Brief description of your questions or goals" />
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800">Booking Summary</h4>
          <p className="text-sm text-green-700">
            {service.title}<br/>
            {selectedDate && `Date: ${selectedDate.toLocaleDateString()}`}<br/>
            {selectedTime && `Time: ${selectedTime}`}<br/>
            Price: {service.price}
          </p>
        </div>
        <Button onClick={handleBooking} className="w-full bg-teal-600 hover:bg-teal-700">
          <Video className="w-4 h-4 mr-2" /> Schedule Free Consultation
        </Button>
      </CardContent>
    </Card>
  );
}
