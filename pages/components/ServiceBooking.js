import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, CreditCard } from 'lucide-react';

const getNextMonthStarts = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 6; i++) {
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + i + 1, 1);
    dates.push(nextMonth);
  }
  return dates;
};

export default function ServiceBooking({ service, type, onClose }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });

  const monthStarts = getNextMonthStarts();

  const handleBooking = () => {
    if (!selectedDate || !customerInfo.name || !customerInfo.email) {
      alert('Please fill in all required fields');
      return;
    }
    alert(`Booking confirmed for ${service.title} on ${selectedDate.toLocaleDateString()}. Payment integration coming soon!`);
    onClose();
  };

  const renderDateSelection = () => {
    if (type === 'integration') {
      return (
        <div>
          <Label>Choose Start Date</Label>
          <Select value={selectedDate ? selectedDate.toISOString() : ''} onValueChange={(value) => setSelectedDate(new Date(value))}>
            <SelectTrigger><SelectValue placeholder="Select start date" /></SelectTrigger>
            <SelectContent>{monthStarts.map(date => (<SelectItem key={date.toISOString()} value={date.toISOString()}>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</SelectItem>))}</SelectContent>
          </Select>
        </div>
      );
    } else {
      return (
        <div>
          <Label>Choose Date</Label>
          <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} disabled={(date) => date < new Date()} className="rounded-md border" />
        </div>
      );
    }
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Book {service.title}</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}><X className="w-4 h-4" /></Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {renderDateSelection()}
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
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h4 className="font-semibold text-teal-800">Booking Summary</h4>
          <p className="text-sm text-teal-700">
            {service.title}<br/>
            {selectedDate && `Date: ${selectedDate.toLocaleDateString()}`}<br/>
            Price: {service.price}
          </p>
        </div>
        <Button onClick={handleBooking} className="w-full bg-teal-600 hover:bg-teal-700">
          <CreditCard className="w-4 h-4 mr-2" /> Proceed to Payment
        </Button>
      </CardContent>
    </Card>
  );
}
