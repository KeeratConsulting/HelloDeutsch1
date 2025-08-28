import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

export default function CourseBooking({ service, onClose }) {
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [studentInfo, setStudentInfo] = useState({ name: '', email: '', phone: '' });

  const monthStarts = getNextMonthStarts();
  const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];

  const handleBooking = () => {
    if (!selectedLevel || !selectedDate || !studentInfo.name || !studentInfo.email) {
      alert('Please fill in all required fields');
      return;
    }
    
    alert(`Booking confirmed for ${service.title} - ${selectedLevel} level starting ${selectedDate}. Payment integration coming soon!`);
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
          <Label htmlFor="level">Choose Level</Label>
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger><SelectValue placeholder="Select German level" /></SelectTrigger>
            <SelectContent>{levels.map(level => (<SelectItem key={level} value={level}>{level}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="start-date">Course Start Date</Label>
          <Select value={selectedDate} onValueChange={setSelectedDate}>
            <SelectTrigger><SelectValue placeholder="Select start date" /></SelectTrigger>
            <SelectContent>{monthStarts.map(date => (<SelectItem key={date.toISOString()} value={date.toLocaleDateString()}>{date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</SelectItem>))}</SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" value={studentInfo.name} onChange={(e) => setStudentInfo({...studentInfo, name: e.target.value})} placeholder="Enter your full name" />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" value={studentInfo.email} onChange={(e) => setStudentInfo({...studentInfo, email: e.target.value})} placeholder="Enter your email" />
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" value={studentInfo.phone} onChange={(e) => setStudentInfo({...studentInfo, phone: e.target.value})} placeholder="Enter your phone number" />
          </div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg">
          <h4 className="font-semibold text-teal-800">Booking Summary</h4>
          <p className="text-sm text-teal-700">
            {service.title} - {selectedLevel} Level<br/>
            Start Date: {selectedDate}<br/>
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
