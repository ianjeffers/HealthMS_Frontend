//Write a React component for the Medications page that will contain a based on the following flask API endpoint:
/*
@app.route('/medication', methods=['POST'])
def medication():
    print("uploaded to medication!")
    data = request.get_json()
    userId = data['userID']
    medication = data['medication']
    dosage = data['dosage']
    date = data['date']
    notes = data['notes']
    print(userId, medication, date, notes)
    db.medication.insert_one({'userId':userId, 'dosage':dosage, 'medication':medication, 'date':date, 'notes':notes})
    return jsonify({'success':True})
    */
    
    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';
    import './Medications.css';
    import { addMedication } from '../actions/medications';
    import { useAuth0 } from "@auth0/auth0-react";
    import { Button } from 'react-bootstrap';
    
    const Medication = () => {
      const [medication, setMedication] = useState('');
      const [dosage, setDosage] = useState('');
      const [date, setDate] = useState('');
      const [notes, setNotes] = useState('');
      const { user, isAuthenticated } = useAuth0();
      const [userID, setUserID] = useState(user ? user.sub : null);

      const handleSubmit = (event) => {
        event.preventDefault();
        addMedication({ medication, dosage, date, notes, userID })
        setMedication('');
        setDosage('');
        setDate('');
        setNotes('');
      }
    
      return (
        <div className="Medication">
          <h1>Medication</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Medication:
              <input type="text" name="medication" value={medication} onChange={(event) => setMedication(event.target.value)} />
            </label>
            <label>
              Dosage:
              <input type="text" name="dosage" value={dosage} onChange={(event) => setDosage(event.target.value)} />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <label>
              Notes:
              <input type="text" name="notes" value={notes} onChange={(event) => setNotes(event.target.value)} />
            </label>
    
            <Button variant="primary" type="submit">
                            Submit
                        </Button>
    
          </form>
          <Link to="/">Home</Link>
        </div>
      );
    }
    
    
    export default Medication;