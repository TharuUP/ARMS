import React, { useState, useMemo, useEffect } from 'react';
import HOSPITAL_NETWORK from "./data/hospitals";
import {
  Plus,
  Search,
  FileText,
  Hospital,
  History,
  Printer,
  Save,
  ChevronRight,
  User,
  LogOut,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  FileCheck,
  PlaneTakeoff,
  Stethoscope,
  Building2,
  LayoutDashboard,
  Settings,
  Bell,
  Menu,
  X,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  Filter,
  Lock,
  Key,
  Receipt,
  Download,
  Trash2,
  FolderOpen
} from 'lucide-react';

// --- API CONFIGURATION ---
// Change this to your PythonAnywhere URL (e.g., https://yourname.pythonanywhere.com/api)
const API_BASE = "https://armslanka.pythonanywhere.com/api";







const GOP_TYPES = [
  { id: 'consultation', label: '1st Consultation', icon: Stethoscope, color: 'blue', desc: 'Standard OPD & Initial diagnostic GOP' },
  { id: 'hospitalization', label: 'Full Hospitalization', icon: Building2, color: 'emerald', desc: 'In-patient treatment & room coverage' },
  { id: 'evacuation', label: 'Heli Evacuation', icon: PlaneTakeoff, color: 'rose', desc: 'Emergency air ambulance services' },
  { id: 'doctor-visit', label: 'Doctor Visit (Hotel)', icon: User, color: 'amber', desc: 'GP visit to hotel/residence' }
];






const App = () => {
  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [currentUser, setCurrentUser] = useState({ name: '', role: '', email: '' });



  const [profileForm, setProfileForm] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    position: '',
    workingHours: '',
    dob: '',
    image: ''
  });

  const [passwordForm, setPasswordForm] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  // UI State
  const [view, setView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);


  // Data State
  const [cases, setCases] = useState([]);
  const [bills, setBills] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');
  const [gopType, setGopType] = useState('consultation');


  // Form Initialization
  const initialCaseForm = {
    patientName: '', insuranceCo: '', location: '', refNumber: '',
    paxDob: '', paxOther: '', hospitalName: '', hospitalAddress: '',
    treatingDoctor: '', insuranceDesk: '', doa: '', roomNo: '',
    dod: '', policyExcess: '0.00', symptoms: '', notes: '',
    status: 'Ongoing', createdAt: new Date().toLocaleDateString(), createdBy: ''
  };

  const initialBillForm = {
    patientName: '', hospital: '', receivedDate: '',
    toBePaid: '', amount: '', paid: '', paidDate: ''
  };

  {/* const [token, setToken] = useState(null); */ }

  {/* const handleGoogleLogin = () => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: "6016673985-r2s2iglnastj205le5r6952f7dteuh4o.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/drive.file",
      callback: (response) => {
        setToken(response.access_token);
        alert("Google Drive Connected ✅");
      },
    });

    client.requestAccessToken();
  }; */}


  const [formData, setFormData] = useState(initialCaseForm);
  const [billForm, setBillForm] = useState(initialBillForm);
  const [hospitalSearch, setHospitalSearch] = useState('');

  const [selectedHospital, setSelectedHospital] = useState(null);

  const [networkOpen, setNetworkOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('sri-lanka');

  {/*const handleDriveUpload = async (caseId, patientName, files) => {
    if (!files || files.length === 0) {
      alert("No files selected ❌");
      return;
    }

    if (!token) {
      alert("Connect Google Drive first");
      return;
    }

    // 🔥 Get or create folder
    const folderId = await getOrCreateFolder(patientName);

    console.log("Uploading to folder:", folderId);

    // 🔁 Loop through files
    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!(file instanceof File)) continue;

      console.log("Uploading file:", file.name);

      const metadata = {
        name: file.name,
        mimeType: file.type,
        parents: [folderId]
      };

      const form = new FormData();
      form.append(
        "metadata",
        new Blob([JSON.stringify(metadata)], { type: "application/json" })
      );
      form.append("file", file);

      try {
        const res = await fetch(
          "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`
            },
            body: form
          }
        );

        const data = await res.json();
        console.log("Uploaded:", data);
      } catch (err) {
        console.error("Upload failed:", file.name);
      }
    }

    alert("All files uploaded ✅");
  };

  const getOrCreateFolder = async (patientName) => {
    const searchRes = await fetch(
      `https://www.googleapis.com/drive/v3/files?q=name='${patientName}' and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    const searchData = await searchRes.json();

    if (searchData.files && searchData.files.length > 0) {
      return searchData.files[0].id;
    }

    const createRes = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: patientName,
        mimeType: "application/vnd.google-apps.folder"
      })
    });

    const folder = await createRes.json();
    return folder.id;
  };
  const createFolder = async (name) => {
    const res = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        mimeType: "application/vnd.google-apps.folder"
      })
    });

    return await res.json();
  }; */}
  const [uploads, setUploads] = useState([]);
  const [driveFiles, setDriveFiles] = useState([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const deleteBill = async (id) => {
    await fetch(`${API_BASE}/bills/${id}`, {
      method: 'DELETE'
    });
    fetchBills();
  };
  const editBill = (bill) => {
    setBillForm(bill);
  };
  const fetchPatientFiles = async (patientName) => {
    setLoadingFiles(true);

    try {
      const res = await fetch(
        `https://armslanka.pythonanywhere.com/api/files/${patientName}`
      );

      const data = await res.json();

      setDriveFiles(data);
    } catch (err) {
      console.error(err);
      setDriveFiles([]);
    }

    setLoadingFiles(false);
  };
  const [editingBillId, setEditingBillId] = useState(null);
  {/*
  const fetchPatientFiles = async (patientName) => {
    if (!token) {
      alert("Connect Google Drive first");
      return;
    }

    setLoadingFiles(true);

    try {
      // 🔍 Find folder
      const folderRes = await fetch(
        `https://www.googleapis.com/drive/v3/files?q=name='${patientName}' and mimeType='application/vnd.google-apps.folder' and trashed=false&fields=files(id,name)`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const folderData = await folderRes.json();

      if (!folderData.files || folderData.files.length === 0) {
        setDriveFiles([]);
        setLoadingFiles(false);
        return;
      }

      const folderId = folderData.files[0].id;

      // 🔍 Get files INSIDE folder
      const filesRes = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}' in parents and trashed=false&fields=files(id,name,createdTime,webViewLink,mimeType)`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const filesData = await filesRes.json();

      console.log("FILES:", filesData.files);

      setDriveFiles(filesData.files || []);
    } catch (err) {
      console.error("Error fetching files:", err);
      setDriveFiles([]);
    }

    setLoadingFiles(false);
  }; */}

  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const handleUpload = (file, patientName) => {
    const id = Date.now() + file.name;

    setUploads((prev) => [
      ...prev,
      { id, name: file.name, progress: 0, patientName }
    ]);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("patientName", patientName);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);

        setUploads((prev) =>
          prev.map((u) =>
            u.id === id ? { ...u, progress: percent } : u
          )
        );
      }
    };

    xhr.onload = () => {
      setUploads((prev) =>
        prev.filter((u) => u.id !== id)
      );

      fetchPatientFiles(patientName);
    };

    xhr.onerror = () => {
      setUploads((prev) =>
        prev.filter((u) => u.id !== id)
      );
    };

    xhr.open("POST", "https://armslanka.pythonanywhere.com/api/upload");
    xhr.send(formData);
  };
  // --- DATA SYNC WITH BACKEND ---

  // Locate your useEffect (around line 180) and update it to this:
  useEffect(() => {
    if (isLoggedIn) {
      fetchCases();
      loadProfile();

      // ✅ FETCH USERS IF ADMIN
      if (currentUser.role === 'Admin') {
        fetchUsers();
      }

      if (['Admin', 'Staff'].includes(currentUser.role)) {
        fetchBills();
      }
    }
  }, [isLoggedIn, currentUser.name]);

  const fetchCases = async () => {
    try {
      const response = await fetch(`${API_BASE}/cases`);
      const data = await response.json();
      setCases(data);
    } catch (err) { console.error("Fetch Cases Error:", err); }
  };

  const fetchBills = async () => {
    try {
      const response = await fetch(`${API_BASE}/bills`);
      const data = await response.json();
      setBills(data);
    } catch (err) { console.error("Fetch Bills Error:", err); }
  };
  console.log("DASHBOARD CASES:", cases);
  // --- HANDLERS ---
  const saveGopToCase = async (data) => {
    try {
      const response = await fetch(`${API_BASE}/documents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          caseId: formData.id,
          patientName: formData.patientName,
          type: 'GOP',
          content: data
        })
      });
      if (response.ok) alert("GOP Saved Successfully!");
    } catch (err) {
      console.error("Save Error:", err);
    }
  };
  const toggleCaseStatus = async (existingCase) => {
    const newStatus = existingCase.status === 'Closed' ? 'Ongoing' : 'Closed';

    const updatedCase = {
      ...existingCase,
      status: newStatus
    };

    try {
      const response = await fetch(`${API_BASE}/cases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCase)
      });
      const data = await response.json();
      if (data.success) {
        fetchCases(); // Refresh the list to update dashboard and archive
      }
    } catch (err) {
      alert("Error updating status");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      });
      const data = await response.json();
      if (data.success) {
        setCurrentUser(data.user);
        setIsLoggedIn(true);
        setLoginError('');

        loadProfile(); // 🚀 ADD HERE
      } else {
        setLoginError(data.message);
      }
    } catch (err) {
      setLoginError("Failed to connect to backend server.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('dashboard');
    setCurrentUser({ name: '', role: '', email: '' });
  };

  const updatePassword = async () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords not match ❌");
      return;
    }

    await fetch(`${API_BASE}/change-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: currentUser.name,
        newPassword: passwordForm.newPassword
      })
    });

    alert("Password Updated ✅");
  };
  const openFile = (file) => {
    window.open(file.url, "_blank");
  };

  const downloadFile = async (file) => {
    try {
      const response = await fetch(file.url);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = file.name || "file.pdf"; // ✅ force download name

      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  const saveProfile = async () => {
    await fetch(`${API_BASE}/profile`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...profileForm,
        username: currentUser.name
      })
    });

    alert("Saved ✅");
  };
  const deleteFile = async (public_id) => {
    if (!public_id) {
      console.error("❌ public_id missing");
      return;
    }

    const res = await fetch("https://armslanka.pythonanywhere.com/api/delete-file", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        public_id: public_id   // 🔥 THIS MUST EXIST
      })
    });

    const data = await res.json();
    console.log("DELETE RESPONSE:", data);

    if (data.success) {
      alert("Deleted ✅");
      fetchPatientFiles(formData.patientName);
    }
  };

  const deleteCase = async (id) => {
    if (!window.confirm("Delete this case?")) return;

    await fetch(`${API_BASE}/cases/${id}`, {
      method: "DELETE"
    });

    fetchCases();
  };
  const [caseDocs, setCaseDocs] = useState([]);

  {/*const uploadToDrive = async (file, patientName) => {
    if (!token) {
      alert("Connect Google Drive first");
      return;
    }

  const metadata = {
    name: file.name,
    mimeType: file.type
  };

  const form = new FormData();
  form.append("metadata", new Blob([JSON.stringify(metadata)], { type: "application/json" }));
  form.append("file", file);

  const res = await fetch(
    "https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: form
    }
  );

  const data = await res.json();
  console.log("Uploaded:", data);

  alert("Uploaded to YOUR Drive ✅");
};*/}

  const loadProfile = async () => {
    if (!currentUser.name) return; // Prevent calling /api/profile/ (empty)

    try {
      const res = await fetch(`${API_BASE}/profile/${encodeURIComponent(currentUser.name)}`);
      if (res.status === 404) return; // Ignore if profile doesn't exist yet
      const data = await res.json();
      if (data) setProfileForm(data);
    } catch (err) {
      console.log("Profile not found or server down");
    }
  };

  const saveCase = async (e) => {
    e?.preventDefault();
    if (!formData.patientName || !formData.refNumber) {
      alert("Missing Required Fields: Patient Name and Reference Number.");
      return;
    }

    const payload = {
      ...formData,
      createdBy: currentUser.name,
      id: formData.id || null
    };
    try {
      const response = await fetch(`${API_BASE}/cases`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.success) {
        fetchCases();
        setView('case-records');
        setFormData(initialCaseForm);
      } else {
        alert(data.message);
      }
    } catch (err) { alert("Server error while saving case."); }
  };

  const saveBill = async (e) => {
    e.preventDefault();

    const payload = {
      ...billForm,
      createdBy: currentUser.name
    };

    const url = editingBillId
      ? `${API_BASE}/bills/${editingBillId}`
      : `${API_BASE}/bills`;

    const method = editingBillId ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (data.success) {
        fetchBills();
        setBillForm(initialBillForm);
        setEditingBillId(null); // 🔥 reset edit mode
      }
    } catch (err) {
      alert("Error saving bill");
    }
  };
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    username: '',
    password: '',
    role: 'Staff',
    image: ''
  });
  const selectHospital = (h) => {
    setFormData({
      ...formData,
      hospitalName: h.name + " (" + h.city + ")",
      hospitalAddress: h.address,
      insuranceDesk: h.contact + " | " + h.email
    });
    setHospitalSearch('');
  };

  const filteredHospitals = useMemo(() => {
    return HOSPITAL_NETWORK.filter(h => {

      const search = hospitalSearch.toLowerCase();

      const matchesSearch =
        h.name.toLowerCase().includes(search) ||
        h.city.toLowerCase().includes(search) ||
        h.country.toLowerCase().includes(search); // ✅ ADD THIS LINE

      const matchesCountry =
        selectedCountry === 'other'
          ? h.country !== 'sri-lanka' && h.country !== 'india'
          : h.country === selectedCountry;

      return matchesSearch && matchesCountry;
    });
  }, [hospitalSearch, selectedCountry]);

  const createUser = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userForm)
    });
    const data = await res.json();
    if (data.success) {
      fetchUsers();
      setUserForm({ username: '', password: '', role: 'Staff', image: '' });
    }
  };

  const deleteUser = async (id) => {
    await fetch(`${API_BASE}/users/${id}`, { method: 'DELETE' });
    fetchUsers();
  };
  const importExcel = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(`${API_BASE}/import-bills`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      alert("Imported successfully ✅");
      fetchBills(); // refresh table
    } else {
      alert("Import failed ❌");
    }
  };
  const changePassword = async (id, newPassword) => {
    await fetch(`${API_BASE}/users/${id}/password`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password: newPassword })
    });
  };

  // Update your fetchUsers function (around line 300):
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${API_BASE}/users`);
      const data = await res.json();

      // ✅ Logic to handle different response formats
      if (Array.isArray(data)) {
        setUsers(data);
      } else if (data.users && Array.isArray(data.users)) {
        setUsers(data.users);
      }
    } catch (err) {
      console.error("User Fetch Error:", err);
    }
  };
  // --- PDF TEMPLATE RENDERER ---


  // --- VIEWS ---

  if (!isLoggedIn) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6 font-sans relative bg-cover bg-center"
        style={{ backgroundImage: "url('/docarms.png')" }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-indigo-900/70"></div>

        {/* Login Card */}
        <div className="w-full max-w-md p-10 rounded-[2.5rem] shadow-2xl z-10 bg-white/5 backdrop-blur-xl border border-white/10">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/arms.png"
              alt="ARMS Logo"
              className="h-20 object-contain bg-white px-4 py-2 rounded-xl shadow-lg"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-white tracking-tight">
              ARMS WEB SYSTEM
            </h1>
            <p className="text-indigo-300 font-bold uppercase text-[10px] tracking-[0.4em] mt-2 italic">
              Sri Lanka Operations
            </p>
          </div>

          {/* FORM (NOW INSIDE CARD ✅) */}
          <form onSubmit={handleLogin} className="space-y-6">

            {/* Username */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                User Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none backdrop-blur-md"
                  placeholder="admin or staff"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <div className="relative">
                <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                <input
                  type="password"
                  className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none backdrop-blur-md"
                  placeholder="••••"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Error */}
            {loginError && (
              <div className="text-rose-400 text-xs font-bold text-center italic animate-pulse">
                {loginError}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-black py-4 rounded-2xl shadow-lg uppercase text-xs tracking-widest transition-all hover:scale-[1.02]"
            >
              Authenticate
            </button>

            {/* Footer */}
            <div className="text-center py-6 text-[10px] font-bold uppercase tracking-widest text-slate-400 border-t border-slate-200 mt-10">
              © {new Date().getFullYear()} Tharusha Bimsara. All rights reserved.
            </div>

          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex text-slate-900 font-sans relative bg-[#F8FAFC]">


      {/* SIDE NAVIGATION */}
      <aside className={`bg-slate-900 text-slate-400 w-64 fixed inset-y-0 left-0 z-50 transition-all duration-300 no-print ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg"><ShieldCheck size={24} strokeWidth={2.5} /></div>
            <div><h1 className="text-white font-black text-lg">ARMS HUB</h1><p className="text-[10px] font-bold text-indigo-400 uppercase">Sri Lanka</p></div>
          </div>
          <nav className="flex-1 space-y-1">

            {currentUser.role === 'Admin' && (
              <button
                onClick={() => setView('user-management')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'user-management'
                  ? 'bg-indigo-600 text-white'
                  : 'hover:bg-slate-800 hover:text-white'
                  }`}
              >
                <Settings size={18} /> Users
              </button>
            )}
            <button onClick={() => setView('dashboard')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'dashboard' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <LayoutDashboard size={18} /> Home
            </button>
            <button onClick={() => { setFormData(initialCaseForm); setView('new-case'); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'new-case' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <Plus size={18} /> New Case
            </button>
            <button onClick={() => setView('case-records')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'case-records' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}>
              <History size={18} /> Case Records
            </button>
            <button
              onClick={() => setView('patient-reports')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'patient-reports' ? 'bg-indigo-600 text-white' : 'hover:bg-slate-800 hover:text-white'}`}
            >
              <FolderOpen size={18} /> Patient Reports
            </button>
            {/* NETWORK DROPDOWN */}
            <div>
              <button
                onClick={() => setNetworkOpen(!networkOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-800 hover:text-white"
              >
                <div className="flex items-center gap-3">
                  <Hospital size={18} /> Network
                </div>
                <ChevronRight className={`transition ${networkOpen ? 'rotate-90' : ''}`} size={16} />
              </button>

              {networkOpen && (
                <div className="ml-6 mt-2 space-y-1">



                  <button
                    onClick={() => {
                      setSelectedCountry('india');
                      setView('hospitals');
                    }}
                    className="block w-full text-left px-3 py-2 text-xs font-bold uppercase hover:text-white"
                  >
                    🇮🇳 India
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCountry('sri-lanka');
                      setView('hospitals');
                    }}
                    className="block w-full text-left px-3 py-2 text-xs font-bold uppercase hover:text-white"
                  >
                    🇱🇰 Sri Lanka
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCountry('other');
                      setView('hospitals');
                    }}
                    className="block w-full text-left px-3 py-2 text-xs font-bold uppercase hover:text-white"
                  >
                    🌍 Other Countries
                  </button>

                </div>
              )}
            </div>
            {['Admin', 'Staff'].includes(currentUser.role) && (
              <button
                onClick={() => setView('bills')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${view === 'bills'
                  ? 'bg-indigo-600 text-white'
                  : 'hover:bg-slate-800 hover:text-white'
                  }`}
              >
                <Receipt size={18} /> Original Bills
              </button>
            )}
          </nav>
          <div className="mt-auto pt-6 border-t border-slate-800">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-rose-900/30 hover:text-rose-400 transition-all"><LogOut size={18} /> Sign Out</button>
          </div>
        </div>
      </aside>

      <main className={`flex-1 flex flex-col min-h-screen relative z-10 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <header className="bg-white border-b border-slate-200 shadow-sm shadow-xl border-b border-slate-200 h-20 sticky top-0 z-40 no-print px-8 flex items-center justify-between shadow-sm">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-slate-100 rounded-lg text-slate-500"><Menu size={24} /></button>
          <div className="flex items-center gap-6 text-right uppercase">
            <div
              onClick={() => setView('profile')}
              className="w-10 h-10 cursor-pointer hover:scale-105 transition"
            >
              {profileForm.image ? (
                <img
                  src={profileForm.image}
                  className="w-10 h-10 rounded-xl object-cover border"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-black">
                  {currentUser.name.charAt(0)}
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto flex-1 w-full print:p-0 print:mt-0">
          {view === 'user-management' && currentUser.role === 'Admin' && (
            <div className="animate-in fade-in duration-500">

              <h2 className="text-4xl font-black mb-8 uppercase italic">
                User Management
              </h2>

              {/* CREATE USER */}
              <div className="bg-white p-6 rounded-2xl shadow mb-10">
                <form onSubmit={createUser} className="grid grid-cols-4 gap-4">

                  <input
                    placeholder="Username"
                    className="p-3 border rounded-xl"
                    value={userForm.username}
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                  />

                  <input
                    placeholder="Password"
                    type="password"
                    className="p-3 border rounded-xl"
                    value={userForm.password}
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                  />

                  <select
                    className="p-3 border rounded-xl"
                    value={userForm.role}
                    onChange={(e) => setUserForm({ ...userForm, role: e.target.value })}
                  >
                    <option>Admin</option>
                    <option>Staff</option>
                  </select>

                  <button className="bg-indigo-600 text-white rounded-xl font-bold">
                    Add User
                  </button>

                </form>
              </div>

              {/* USER LIST (Around line 550) */}
              <div className="bg-white rounded-2xl shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-900 text-white text-xs uppercase">
                    <tr>
                      <th className="p-4 text-left">Username</th>
                      <th className="p-4 text-left">Role</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.length > 0 ? (
                      users.map(u => (
                        <tr key={u.id} className="border-b hover:bg-slate-50 transition-colors text-slate-800">
                          <td className="p-4 font-bold uppercase text-xs">{u.username}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${u.role === 'Admin' ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600'
                              }`}>
                              {u.role}
                            </span>
                          </td>
                          <td className="p-4 flex gap-2 justify-end">
                            <button
                              onClick={() => {
                                const newPass = prompt("Enter New Password:");
                                if (newPass) changePassword(u.id, newPass);
                              }}
                              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition shadow-sm"
                            >
                              Reset
                            </button>
                            <button
                              onClick={() => deleteUser(u.id)}
                              className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition shadow-sm"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="p-10 text-center text-slate-400 font-bold uppercase text-xs">
                          No active users found in system.
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>

            </div>
          )}
          {/* HOME VIEW */}
          {view === 'dashboard' && (() => {
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();

            // Helper to check if a case belongs to this calendar month
            const isThisMonth = (dateStr) => {
              if (!dateStr) return false;
              // Split DD.MM.YYYY format
              const parts = dateStr.split('.');
              if (parts.length !== 3) return false;
              const [d, m, y] = parts;
              return parseInt(m) - 1 === currentMonth && parseInt(y) === currentYear;
            };

            const monthlyCases = cases.filter(c => isThisMonth(c.createdAt));

            const stats = [

              {
                label: "Active Files",
                val: cases?.filter(c =>
                  (c.status || '').trim().toLowerCase() === 'ongoing'
                ).length || 0,
                icon: Activity,
                color: "indigo"
              },
              {
                label: "Closed Files",
                val: cases.filter(c => c.status === 'Closed').length,
                icon: CheckCircle2, color: "slate"
              },
              { label: "Bill Audit", val: bills.length, icon: Receipt, color: "amber" },
              { label: "Total This Month", val: monthlyCases.length, icon: ArrowUpRight, color: "emerald" }
            ];

            return (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
                  <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Assistance Operations</h2>
                    <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-2">Active Medical Hub — Sri Lanka</p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-xl border border-slate-200 flex items-center gap-2 shadow-sm text-xs font-black uppercase text-slate-400">
                    <Clock size={16} className="text-indigo-600" /> {new Date().toDateString()}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-7 rounded-[2rem] border border-slate-200 shadow-sm hover:scale-105 transition-all group">
                      <div className={`w-14 h-14 bg-${stat.color}-50 text-${stat.color}-600 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                        <stat.icon size={28} />
                      </div>
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
                      <p className="text-4xl font-black mt-1 tracking-tighter text-slate-900">{stat.val}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                    <h3 className="font-black uppercase text-[10px] tracking-widest text-slate-400">Real-time Case Log</h3>
                  </div>
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 uppercase text-[10px] font-black text-slate-400 tracking-widest border-b border-slate-100">
                      <tr>
                        <th className="px-8 py-5">REF</th>
                        <th className="px-8 py-5">Patient Name</th>
                        <th className="px-8 py-5">Provider</th>
                        <th className="px-8 py-5">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {cases.slice(0, 5).map(c => (
                        <tr key={c.id} className="hover:bg-slate-50 transition">
                          <td className="px-8 py-5 font-mono text-xs font-black text-slate-500">{c.refNumber}</td>
                          <td className="px-8 py-5">
                            {/* FIXED: Changed text-white to text-slate-900 */}
                            <p className="font-black text-slate-900 uppercase tracking-tight">{c.patientName}</p>
                            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{c.insuranceCo}</p>
                          </td>
                          <td className="px-8 py-5 text-[10px] font-black uppercase text-indigo-700">{c.hospitalName}</td>
                          <td className="px-8 py-5">
                            <span className={`text-[9px] font-black uppercase px-3 py-1 rounded-full ${c.status === 'Ongoing'
                              ? 'text-emerald-600 bg-emerald-50'
                              : 'text-slate-400 bg-slate-50'
                              }`}>
                              {c.status || 'Ongoing'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })()}

          {/* HOSPITAL NETWORK VIEW */}
          {view === 'hospitals' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4"><div><h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic tracking-widest">Network</h2><p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Approved Provider Directory</p></div><div className="relative w-full md:w-96"><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input type="text" placeholder="Filter Facilities..." className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-[1.5rem] focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-xs uppercase" value={hospitalSearch} onChange={(e) => setHospitalSearch(e.target.value)} /></div></header>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHospitals.map((h, i) => (
                  <div key={i} className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all border-b-[8px] border-b-indigo-500 relative group overflow-hidden"><div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-125 transition-transform"><Hospital size={100} /></div><div className="flex justify-between items-start mb-6"><div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shadow-inner"><Building2 size={28} /></div><span className="text-[10px] font-black uppercase text-indigo-700 bg-indigo-50 px-4 py-1.5 rounded-full tracking-widest italic">{h.city}</span></div><h3 className="text-xl font-black uppercase tracking-tight mb-2 leading-tight">{h.name}</h3><p className="text-[10px] text-slate-400 font-bold uppercase mb-8 italic truncate">{h.address}</p><div className="space-y-4 mb-10"><div className="flex items-center gap-3 text-sm text-slate-700 font-black uppercase text-[11px]"><User size={18} className="text-indigo-400" />{h.contact}</div><div className="flex items-center gap-3 text-sm text-slate-600 font-mono text-[10px]"><Mail size={18} className="text-indigo-400" />{h.email}</div></div><button onClick={() => { selectHospital(h); setView('new-case'); }} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase shadow-xl hover:bg-indigo-600 transition-all tracking-widest italic">Assign to Intake</button><button
                    onClick={() => setSelectedHospital(h)}
                    className="w-full mt-3 py-3 bg-indigo-100 text-indigo-700 rounded-xl font-black text-[10px] uppercase hover:bg-indigo-600 hover:text-white transition-all"
                  >
                    View More
                  </button></div>
                ))}
              </div>
              {selectedHospital && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

                  <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl relative">

                    {/* CLOSE BUTTON */}
                    <button
                      onClick={() => setSelectedHospital(null)}
                      className="absolute top-4 right-4 text-slate-400 hover:text-red-500"
                    >
                      <X size={20} />
                    </button>

                    {/* TITLE */}
                    <h2 className="text-2xl font-black mb-4 uppercase">
                      {selectedHospital.name}
                    </h2>

                    {/* DETAILS */}
                    <div className="space-y-3 text-sm">

                      <p><b>City:</b> {selectedHospital.city}</p>

                      <p><b>Address:</b> {selectedHospital.address}</p>

                      <p><b>Contact:</b> {selectedHospital.contact}</p>

                      <p><b>Email:</b> {selectedHospital.email}</p>

                      <p><b>Phone:</b> {selectedHospital.phone}</p>

                      <p><b>Services:</b> {selectedHospital.services}</p>

                    </div>

                    {/* ACTION BUTTON */}
                    <button
                      onClick={() => {
                        selectHospital(selectedHospital);
                        setSelectedHospital(null);
                        setView('new-case');
                      }}
                      className="mt-6 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold"
                    >
                      Assign to Intake
                    </button>

                  </div>
                </div>
              )}
            </div>

          )}

          {/* CASE RECORDS VIEW */}
          {view === 'case-records' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 flex justify-between items-end">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Case Archive</h2>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mt-2 italic">Historical Assistance Records</p>
                </div>
                <div className="relative w-80 no-print">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search archive..."
                    className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-12 pr-4 text-xs font-bold outline-none focus:ring-2 focus:ring-indigo-600 shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] font-black tracking-widest">
                    <tr>
                      <th className="px-8 py-6">Patient Name</th>
                      <th className="px-8 py-6">Insurance</th>
                      <th className="px-8 py-6 text-center">Location</th>
                      <th className="px-8 py-6 text-center">Created</th>
                      <th className="px-8 py-6 text-center">Status</th>
                      <th className="px-8 py-6 text-center">User</th>
                      <th className="px-8 py-6 text-right no-print">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {cases.filter(c => c.patientName.toLowerCase().includes(searchQuery.toLowerCase())).map(c => (
                      <tr key={c.id} className="hover:bg-indigo-50/30 transition group">
                        <td className="px-8 py-6 font-black uppercase text-sm text-slate-800">{c.patientName}</td>
                        <td className="px-8 py-6 font-bold uppercase text-slate-500 text-xs">{c.insuranceCo}</td>
                        <td className="px-8 py-6 text-center font-black uppercase text-xs text-indigo-600">{c.location}</td>
                        <td className="px-8 py-6 text-center font-mono text-xs font-bold">{c.createdAt}</td>

                        {/* STATUS BADGE WITH TOGGLE */}
                        <td className="px-8 py-6 text-center">
                          <button
                            onClick={() => toggleCaseStatus(c)}
                            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase transition-all active:scale-95 border ${c.status === 'Ongoing'
                              ? 'bg-emerald-100 text-emerald-600 border-emerald-200'
                              : 'bg-slate-100 text-slate-400 border-slate-200'
                              }`}
                          >
                            {c.status || 'Ongoing'}
                          </button>
                        </td>

                        <td className="px-8 py-6 text-center font-black text-xs text-indigo-600">{c.createdBy}</td>

                        <td className="px-8 py-6 text-right no-print">
                          <div className="flex gap-2 justify-end">
                            {/* VIEW/EDIT CASE */}
                            <button
                              onClick={() => { setFormData(c); setView('new-case'); }}
                              className="p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition shadow-sm"
                              title="Edit Case"
                            >
                              <FileText size={16} />
                            </button>

                            {/* DOCUMENT VAULT / UPLOADS */}
                            <button
                              onClick={() => { setFormData(c); setView('case-vault'); }}
                              className="p-2 bg-amber-500 text-white rounded-xl hover:bg-amber-600 transition shadow-sm"
                              title="Case Documents"
                            >
                              <FolderOpen size={16} />
                            </button>

                            {/* DELETE CASE */}
                            <button
                              onClick={() => deleteCase(c.id)}
                              className="p-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-sm"
                              title="Delete"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {/* 1. PATIENT REPORTS LIST */}
          {view === 'patient-reports' && (

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-10 print:mb-2">
                <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Patient Reports</h2>
                <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Document Vault (Synced with Google Drive)</p>
              </div>
              <div className="mb-4">

              </div>
              {/*<button onClick={handleGoogleLogin}>
                Connect Google Drive
              </button>*/}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cases.map((c) => (
                  <div key={c.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <User size={24} />
                      </div>
                      <div className="flex-1 truncate">
                        <h3 className="font-black uppercase text-sm truncate">{c.patientName}</h3>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{c.refNumber}</p>
                      </div>
                    </div>
                    {uploads
                      .filter((u) => u.patientName === c.patientName)
                      .map((u) => (
                        <div key={u.id} className="mb-2">
                          <p className="text-xs font-bold text-slate-600">
                            {u.name}
                          </p>

                          <div className="w-full bg-slate-200 rounded-xl overflow-hidden">
                            <div
                              className="bg-indigo-600 text-white text-xs font-bold text-center py-1 transition-all duration-300"
                              style={{ width: `${u.progress}%` }}
                            >
                              {u.progress}%
                            </div>
                          </div>
                        </div>
                      ))}
                    {uploading && (
                      <div className="w-full bg-slate-200 rounded-xl overflow-hidden mb-4">
                        <div
                          className="bg-indigo-600 text-white text-xs font-bold text-center py-1 transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        >
                          {uploadProgress}%
                        </div>
                      </div>
                    )}
                    {uploading && (
                      <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs mb-2">
                        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
                        Uploading...
                      </div>
                    )}
                    <div className="grid grid-cols-2 gap-2">

                      <label className="py-3 bg-slate-900 text-white rounded-xl font-black text-[9px] uppercase flex items-center justify-center gap-2 cursor-pointer hover:bg-indigo-600 transition">
                        <Plus size={14} /> Upload
                        <input
                          type="file"
                          multiple   // ✅ ADD THIS
                          className="hidden"
                          onChange={(e) => {
                            const files = e.target.files;
                            for (let i = 0; i < files.length; i++) {
                              handleUpload(files[i], c.patientName);
                            }
                          }}
                        />
                      </label>
                      <button
                        onClick={() => {
                          setFormData(c);
                          fetchPatientFiles(c.patientName);
                          setView('case-vault');
                        }}
                        className="py-3 bg-indigo-50 text-indigo-600 rounded-xl font-black text-[9px] uppercase hover:bg-indigo-100 transition"
                      >
                        View Folder
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. CASE VAULT (THE ACTUAL FOLDER VIEW) */}
          {view === 'case-vault' && (
            <div className="animate-in fade-in duration-500">
              <div className="flex justify-between items-center mb-10">
                <button
                  onClick={() => setView('patient-reports')}
                  className="text-slate-400 font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-indigo-600 transition"
                >
                  <ChevronRight className="rotate-180" size={16} /> Back to Reports
                </button>
                <div className="text-right">
                  <h2 className="text-2xl font-black uppercase italic leading-none">{formData.patientName}</h2>
                  <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest mt-1">Cloud Storage Account</p>
                </div>
              </div>

              {loadingFiles ? (
                <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-slate-100 shadow-sm">
                  <Activity className="text-indigo-600 animate-spin mb-4" size={40} />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Accessing Google Drive API...</p>
                </div>
              ) : driveFiles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {driveFiles.map((file) => (
                    <div key={file.name + file.url} className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-300 transition group">
                      <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                        <FileText size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-[11px] uppercase truncate text-slate-700">{file.name}</p>

                      </div>
                      <button
                        onClick={() => downloadFile(file)}
                        className="text-green-600 text-xs font-bold"
                      >
                        Download
                      </button>

                      <button
                        onClick={() => deleteFile(file.public_id)}
                        className="text-rose-600 text-xs font-bold"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white py-24 rounded-[3rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center px-10">
                  <FolderOpen size={48} className="text-slate-200 mb-4" />
                  <h3 className="font-black uppercase text-sm text-slate-400">No Documents Found</h3>
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mt-2 max-w-xs leading-relaxed">
                    Upload GOPs, Invoices, or Case Files to see them here.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* INTAKE FORM VIEW */}
          {view === 'new-case' && (
            <div className="max-w-4xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="flex justify-between items-center mb-10 no-print"><div><h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">Intake Console</h2></div><div className="flex gap-3"><button onClick={() => window.print()} className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-sm hover:bg-slate-50">Printer</button><button onClick={saveCase} className="bg-indigo-600 text-white px-8 py-3 rounded-2xl flex items-center gap-2 font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-indigo-700 active:scale-95 transition-all"><Save size={18} /> Sync Data</button></div></div>

              {/* PHYSICAL CASE FILE REPLICA */}
              <div className="print-container bg-white text-slate-950 relative w-[210mm] min-h-[297mm] mx-auto p-20 shadow-2xl">
                <div className="text-left font-black italic text-s mb-4 uppercase opacity-60">{formData.createdAt}</div>

                <div className="text-center mb-16">
                  <h1 className="text-6xl font-black italic underline decoration-4 underline-offset-[12px] tracking-[0.2em] uppercase">Case File</h1>
                </div>

                <div className="space-y-12 mb-12">
                  {/* 1. Centered Patient Name */}
                  <div className="flex flex-col items-center border-b-4 border-slate-900 pb-2">
                    <input
                      className="w-full text-5xl font-black uppercase tracking-tighter bg-transparent outline-none text-center placeholder:text-slate-100 no-print"
                      placeholder="Patient Name"
                      value={formData.patientName}
                      onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    />
                    <span className="print-only text-5xl font-black uppercase tracking-tighter leading-none text-center">
                      {formData.patientName}
                    </span>
                  </div>

                  {/* 2. Centered Insurance // SL // Location */}
                  <div className="case-row border-b-2 border-slate-900 pb-2 font-bold text-2xl uppercase">

                    {/* LEFT - INSURANCE */}
                    <div className="case-left">
                      <input
                        className="w-full bg-transparent outline-none no-print"
                        placeholder="Ins Co."
                        value={formData.insuranceCo}
                        onChange={(e) => setFormData({ ...formData, insuranceCo: e.target.value })}
                      />
                      <span className="print-only">{formData.insuranceCo}</span>
                    </div>

                    {/* CENTER */}
                    <div className="case-center text-indigo-600">// SL //</div>

                    {/* RIGHT - LOCATION */}
                    <div className="case-right">
                      <input
                        className="w-full bg-transparent outline-none no-print"
                        placeholder="Location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      />
                      <span className="print-only">{formData.location}</span>
                    </div>

                  </div>

                  {/* 3. Centered Reference Number */}
                  <div className="flex items-center justify-center gap-4 border-b-2 border-slate-900 pb-2 font-black text-2xl">
                    <span>REF :-</span>
                    <input
                      className="font-mono font-bold bg-transparent outline-none no-print min-w-[200px]"
                      placeholder="ID"
                      value={formData.refNumber}
                      onChange={(e) => setFormData({ ...formData, refNumber: e.target.value })}
                    />
                    <span className="print-only font-mono font-bold">{formData.refNumber}</span>
                  </div>
                </div>
                <div className="grid grid-cols-12 border-4 border-slate-900 mb-12 bg-white">
                  <div className="col-span-7 border-r-4 border-slate-900 divide-y-4 divide-slate-900">
                    <div className="p-8">
                      <h3 className="text-[10px] font-black uppercase underline decoration-2 mb-4 text-slate-400">Pax Details:</h3>
                      <div className="flex gap-4 text-xl font-bold uppercase"><span>DOB:</span><input className="flex-1 outline-none bg-transparent no-print font-mono" placeholder="23.12.1977" value={formData.paxDob} onChange={(e) => setFormData({ ...formData, paxDob: e.target.value })} /><span className="print-only">{formData.paxDob}</span></div>
                      <textarea className="w-full h-24 text-xl italic bg-transparent outline-none resize-none no-print" placeholder="Notes..." value={formData.paxOther} onChange={(e) => setFormData({ ...formData, paxOther: e.target.value })} /><p className="print-only italic text-xl">{formData.paxOther}</p>
                    </div>
                    <div className="p-8 bg-slate-50/50">
                      <h3 className="text-[10px] font-black uppercase underline decoration-2 mb-4 text-slate-400">Hospital:</h3>
                      <div className="no-print relative mb-4"><input className="w-full p-3 border-2 border-slate-200 rounded-2xl text-xs font-black uppercase outline-none focus:ring-2 focus:ring-indigo-600 transition-all" placeholder="Search SL Medical Network..." value={hospitalSearch} onChange={(e) => setHospitalSearch(e.target.value)} />
                        {hospitalSearch && filteredHospitals.length > 0 && (<div className="absolute top-full left-0 right-0 bg-white border-4 border-slate-900 shadow-2xl z-50 rounded-xl overflow-hidden mt-2">{filteredHospitals.map((h, i) => (<div key={i} onClick={() => selectHospital(h)} className="p-4 hover:bg-indigo-600 hover:text-white cursor-pointer border-b last:border-0 text-xs font-black uppercase">{h.name} — {h.city}</div>))}</div>)}
                      </div>
                      <textarea className="w-full h-24 text-2xl font-black uppercase bg-transparent outline-none resize-none no-print leading-tight" value={formData.hospitalName + "\n" + formData.hospitalAddress} readOnly /><p className="print-only text-2xl font-black uppercase leading-tight">{formData.hospitalName + "\n" + formData.hospitalAddress}</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex flex-col divide-y-4 divide-slate-900">
                    <div className="grid grid-cols-1 divide-y-2 divide-slate-900 bg-slate-100/30 font-bold uppercase text-[10px]">
                      {['DOA Admit', 'Room No', 'DOD Discharge', 'Excess'].map((label, idx) => (
                        <div key={idx} className="p-4 flex justify-between items-center"><span className="text-slate-400">{label}:</span><input className="w-1/2 text-right border border-slate-300 px-2 py-1 rounded outline-none no-print text-sm" value={idx === 3 ? formData.policyExcess : idx === 0 ? formData.doa : idx === 1 ? formData.roomNo : formData.dod} onChange={(e) => { const v = e.target.value; if (idx === 0) setFormData({ ...formData, doa: v }); else if (idx === 1) setFormData({ ...formData, roomNo: v }); else if (idx === 2) setFormData({ ...formData, dod: v }); else setFormData({ ...formData, policyExcess: v }); }} /><span className="print-only font-bold text-xl">{idx === 3 ? formData.policyExcess : idx === 0 ? formData.doa : idx === 1 ? formData.roomNo : formData.dod}</span></div>
                      ))}
                    </div>
                    <div className="flex-1 p-8"><h3 className="text-[10px] font-black uppercase underline decoration-2 mb-4 text-slate-400">Diagnosis:</h3><textarea className="w-full min-h-[200px] text-2xl font-bold bg-transparent outline-none resize-none no-print leading-relaxed" value={formData.symptoms} onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })} /><p className="print-only text-2xl font-bold">{formData.symptoms}</p></div>
                  </div>
                </div>
                <div className="border-t-4 border-slate-900 pt-12 min-h-[150px] relative"><div className="flex gap-6 items-start text-l italic font-black"><span className="text-indigo-600">1)</span><div className="flex-1"><textarea className="w-full h-40 bg-transparent outline-none resize-none no-print italic" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} /><p className="print-only">{formData.notes}</p></div></div><div className="absolute bottom-4 right-4 text-[8px] font-black uppercase opacity-20 italic">Case Synchronized: {formData.refNumber}</div></div>
              </div>
            </div>
          )}

          {/* BILLS VIEW (Admin Only) */}
          {/* ... other views like dashboard, new-case, etc. ... */}

          {/* BILLS VIEW (Admin Only) */}
          {view === 'bills' && ['Admin', 'Staff'].includes(currentUser.role) && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">

              {/* 1. HEADER - Hidden on Print */}
              <div className="mb-10 flex justify-between items-end no-print">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Financial Ledger</h2>
                  <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2 italic">Provider Bill Management</p>
                </div>
                <button
                  onClick={() => {
                    document.title = "Financial Ledger Export";
                    window.print();
                  }}
                  className="bg-slate-900 text-white px-8 py-3 rounded-2xl flex items-center gap-2 font-black text-xs uppercase tracking-widest hover:bg-indigo-700 shadow-xl transition-all"
                >
                  <Printer size={18} /> Export Log
                </button>
              </div>

              {/* 2. NEW ENTRY FORM - Hidden on Print */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm mb-10 no-print">
                <h3 className="text-[10px] font-black uppercase tracking-widest mb-8 text-indigo-600 flex items-center gap-2">
                  <Plus size={16} /> New Entry
                </h3>

                <form onSubmit={saveBill} className="grid grid-cols-1 md:grid-cols-4 gap-8">

                  {[
                    { k: 'patientName', l: 'Patient', p: 'Name' },
                    { k: 'hospital', l: 'Provider', p: 'Hospital' },
                    { k: 'receivedDate', l: 'Received', t: 'date' },
                    { k: 'toBePaid', l: 'Entity', p: 'Payer' },
                    { k: 'amount', l: 'Amt', p: 'LKR 0' },
                    { k: 'paid', l: 'Status', s: ['Yes', 'No', 'Partial'] },
                    { k: 'paidDate', l: 'Paid On', t: 'date' }
                  ].map((f, i) => (
                    <div key={i}>
                      <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                        {f.l}
                      </label>

                      {f.s ? (
                        <select
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-xs font-bold uppercase focus:ring-2 focus:ring-indigo-600"
                          value={billForm[f.k]}
                          onChange={(e) =>
                            setBillForm({ ...billForm, [f.k]: e.target.value })
                          }
                        >
                          <option value="">Select...</option>
                          {f.s.map(o => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={f.t || 'text'}
                          className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none text-xs font-bold uppercase tracking-tight focus:ring-2 focus:ring-indigo-600"
                          placeholder={f.p}
                          value={billForm[f.k]}
                          onChange={(e) =>
                            setBillForm({ ...billForm, [f.k]: e.target.value })
                          }
                        />
                      )}
                    </div>
                  ))}

                  {/* ✅ BUTTON */}
                  <div className="md:col-span-2 flex items-end">
                    <button
                      type="submit"
                      className="w-full h-[52px] bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase hover:bg-indigo-700 transition shadow-lg active:scale-95"
                    >
                      Sync Entry
                    </button>
                  </div>

                  {/* ✅ EXCEL IMPORT */}
                  <div className="md:col-span-2 flex flex-col justify-end">
                    <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">
                      Import Excel
                    </label>

                    <input
                      type="file"
                      accept=".xlsx,.xls"
                      onChange={(e) => importExcel(e.target.files[0])}
                      className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    />
                  </div>

                </form>
              </div>
              {/* ✅ PRINT ONLY AREA */}
              <div className="print-area hidden">
                <h1 className="print-title">FINANCIAL LEDGER EXPORT</h1>

                <table className="print-table">
                  <thead>
                    <tr>
                      <th>Patient</th>
                      <th>Hospital</th>
                      <th>Received</th>
                      <th>To Pay</th>
                      <th>Amount</th>
                      <th>Paid</th>
                      <th>Paid Date</th>
                      <th>Created</th>
                    </tr>
                  </thead>

                  <tbody>
                    {bills.map((b, i) => (
                      <tr key={i}>
                        <td>{b.patientName}</td>
                        <td>{b.hospital}</td>
                        <td>{b.receivedDate}</td>
                        <td>{b.toBePaid}</td>
                        <td>
                          {!b.amount || b.amount.toLowerCase() === "nan" ? "NA" : b.amount}
                        </td>
                        <td>{b.paid || "NA"}</td>
                        <td>{b.paidDate || "NA"}</td>
                        <td>{b.createdBy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* 3. PRINT CONTAINER - Centers on A4 */}
              <div className="ledger-print bg-white w-full">

                {/* --- OFFICIAL LETTERHEAD START --- */}
                <div className="hidden print:flex justify-between items-start mb-10 border-b-2 border-slate-900 pb-6">
                  <div className="text-left font-serif">
                    <h1 className="text-2xl font-black italic uppercase leading-none mb-1 text-slate-900">
                      Asia Rescue & Medical Services (Private) Limited
                    </h1>
                    <h2 className="text-xl font-bold uppercase mb-4 tracking-wider text-slate-800">
                      Sri Lanka Office
                    </h2>
                    <div className="text-[11px] space-y-0.5 font-bold text-slate-700">
                      <p>Level 06, No : 135, Dutugemunu</p>
                      <p>Street, Kohuwala, Sri Lanka</p>
                      <p>Tel: +94 76 768 8111 / +94 74 116 8114</p>
                      <p>E-mail: arms@armslanka.com</p>
                    </div>
                  </div>
                  <div className="w-40">
                    <img src="/Picture1.jpg" alt="Logo" className="w-full h-auto object-contain" />
                  </div>
                </div>
                {/* --- OFFICIAL LETTERHEAD END --- */}

                <div className="text-center mb-8">
                  <h1 className="text-2xl font-black uppercase tracking-widest">Financial Ledger Export</h1>
                </div>

                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-white uppercase text-[10px] font-black tracking-widest text-center">
                    <tr>
                      <th className="px-4 py-6 border-r border-slate-800 w-[18%]">Patient</th>
                      <th className="px-4 py-6 border-r border-slate-800 w-[25%]">Hospital</th>
                      <th className="px-4 py-6 border-r border-slate-800">Received</th>
                      <th className="px-4 py-6 border-r border-slate-800">To Pay</th>
                      <th className="px-4 py-6 border-r border-slate-800">Amount</th>
                      <th className="px-4 py-6 border-r border-slate-800">Paid</th>
                      <th className="px-4 py-6">Paid Date</th>
                      <th>Created By</th>
                      <th className="no-print">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-center uppercase text-[10px] font-bold">
                    {bills.map(b => (
                      <tr key={b.id} className="hover:bg-slate-50 transition">
                        <td className="px-4 py-5 font-black border-r border-slate-50 break-words whitespace-normal text-left">{b.patientName}</td>
                        <td className="px-4 py-5 border-r border-slate-50 break-words whitespace-normal text-left">{b.hospital}</td>
                        <td className="px-4 py-5 border-r border-slate-50 font-mono">{b.receivedDate}</td>
                        <td className="px-4 py-5 border-r border-slate-50 italic">{b.toBePaid}</td>
                        <td className={`px-4 py-5 border-r border-slate-50 font-black ${b.paid === 'Yes' ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {(!b.paid || String(b.paid).toLowerCase() === "nan" || b.paid === "NA")
                            ? "No"
                            : b.paid}
                        </td>
                        <td className={`px-4 py-5 border-r border-slate-50 font-black ${b.paid === 'Yes' ? 'text-emerald-600' : 'text-rose-500'}`}>
                          {b.paid}
                        </td>
                        <td className="px-4 py-5 font-mono">{b.paidDate}</td>
                        <td>{b.createdBy}</td>

                        {/* ACTIONS */}
                        <td className="no-print flex gap-2 justify-center">

                          <button onClick={() => {
                            setBillForm(b);
                            setEditingBillId(b.id); // 🔥 important
                          }}>
                            Edit
                          </button>

                          <button
                            onClick={() => deleteBill(b.id)}
                            className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                          >
                            Delete
                          </button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="print-only mt-10 text-center text-[8px] text-slate-400 font-bold uppercase tracking-widest border-t pt-4">
                  Certified Record Generated on {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>
          )}

          {/* ... next views like profile ... */}
          {view === 'profile' && (
            <div className="max-w-4xl mx-auto bg-white p-[20mm] rounded-3xl shadow">

              <h2 className="text-3xl font-black mb-8">Account Settings</h2>

              {/* IMAGE */}
              <div className="flex items-center gap-6 mb-8">
                <img
                  src={profileForm.image || "/default-avatar.png"}
                  className="w-24 h-24 rounded-full object-cover border"
                />

                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setProfileForm({ ...profileForm, image: reader.result });
                    };
                    reader.readAsDataURL(file);
                  }}
                />
              </div>

              {/* FORM */}
              <div className="grid grid-cols-2 gap-6">

                <input
                  placeholder="First Name"
                  className="p-3 border rounded-xl"
                  value={profileForm.firstName}
                  onChange={(e) => setProfileForm({ ...profileForm, firstName: e.target.value })}
                />

                <input
                  placeholder="Last Name"
                  className="p-3 border rounded-xl"
                  value={profileForm.lastName}
                  onChange={(e) => setProfileForm({ ...profileForm, lastName: e.target.value })}
                />

                <input
                  placeholder="Mobile"
                  className="p-3 border rounded-xl"
                  value={profileForm.mobile}
                  onChange={(e) => setProfileForm({ ...profileForm, mobile: e.target.value })}
                />

                <input
                  placeholder="Working Hours"
                  className="p-3 border rounded-xl"
                  value={profileForm.workingHours}
                  onChange={(e) => setProfileForm({ ...profileForm, workingHours: e.target.value })}
                />

                {/* REPLACED SPECIALITY */}
                <input
                  placeholder="Position"
                  className="p-3 border rounded-xl"
                  value={profileForm.position}
                  onChange={(e) => setProfileForm({ ...profileForm, position: e.target.value })}
                />

                <input
                  placeholder="Date of Birth"
                  type="date"
                  className="p-3 border rounded-xl"
                  value={profileForm.dob}
                  onChange={(e) => setProfileForm({ ...profileForm, dob: e.target.value })}
                />

              </div>

              <div className="mt-8 space-y-4">
                <button
                  onClick={saveProfile}
                  className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setView('change-password')}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold"
                >
                  Change Password
                </button>
              </div>

            </div>
          )}

          {view === 'change-password' && (
            <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow">

              <h2 className="text-2xl font-black mb-6">Change Password</h2>

              <input
                type="password"
                placeholder="Old Password"
                className="w-full p-3 border rounded-xl mb-4"
                value={passwordForm.oldPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, oldPassword: e.target.value })}
              />

              <input
                type="password"
                placeholder="New Password"
                className="w-full p-3 border rounded-xl mb-4"
                value={passwordForm.newPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-xl mb-6"
                value={passwordForm.confirmPassword}
                onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
              />

              <button
                onClick={updatePassword}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"
              >
                Update Password
              </button>

            </div>
          )}



          {/* OTHER VIEWS (GOP LIBRARY, HOSPITALS) */}
          {view === 'gop-library' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <header className="mb-10"><h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic text-center md:text-left">GOP Generator</h2><p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2 italic">Official Authorization Templates</p></header>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {GOP_TYPES.map(g => (
                  <div key={g.id} className="bg-white p-8 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group">
                    <div className={`w-20 h-20 bg-${g.color}-50 text-${g.color}-600 rounded-[2rem] flex items-center justify-center mb-8 mx-auto transition-transform group-hover:scale-110`}><g.icon size={40} /></div>
                    <h3 className="font-black uppercase text-xs mb-3 tracking-widest">{g.label}</h3><p className="text-[10px] text-slate-400 font-bold uppercase mb-10 leading-relaxed italic">{g.desc}</p>
                    {/* Change this part in your GOP_TYPES.map */}
                    <button
                      onClick={() => {
                        if (!formData.patientName || formData.patientName === '') {
                          alert("Please select a patient from Case Records first!");
                          setView('case-records'); // Send to Archive to pick a case
                        } else {
                          setGopType(g.id);
                          setView('gop-preview');
                        }
                      }}
                      className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg hover:bg-indigo-600 transition-all"
                    >
                      Use Template
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}


        </div>

        {/* ✅ MODERN FOOTER */}
        <div className="mt-6 py-6 pb-10 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 border-t border-slate-200">
          © {new Date().getFullYear()} Tharusha Bimsara · ARMS SYSTEM
        </div>
      </main>





      <style dangerouslySetInnerHTML={{
        __html: `
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
    
    body { font-family: 'Space Grotesk', sans-serif; }

    @media screen {
      .print-only { display: none !important; }
    }
      /* WEB VIEW FIX */
.case-row {
  display: flex;
  align-items: center;
   justify-content: center; 
  justify-content: center;
  gap: 20px;
  width: 100%;
}

.case-left {
  flex: 1;
  text-align: right;
}

.case-center {
  font-weight: 900;
  font-size: 28px;
}

.case-right {
  flex: 1;
  text-align: left;
}

@media print {

  h1, h2 {
    margin-top: 0 !important;
  }

  .ledger-print h2 {
    margin-top: 0 !important;
    padding-top: 0 !important;
  }

}
  @media print {
  body {
    margin-top: -5mm !important;
  }
}

    @media print {

  .case-row {
    display: grid !important;
    grid-template-columns: 1fr auto 1fr !important;
    align-items: center !important;
    width: 100% !important;
  }

  .case-left {
    text-align: right !important;
  }

  .case-center {
    text-align: center !important;
    font-weight: 900 !important;
    font-size: 28px !important;
    padding: 0 10px !important;
  }

  .case-right {
    text-align: left !important;
  }

}
  @page {
  size: A4 landscape;
  margin: 8mm 5mm !important;
} 
  @media print {

  .ledger-print {
    position: static !important;
    padding: 0 !important;
  }

  /* 🔥 THIS IS THE KEY FIX */
  .ledger-print tr {
    page-break-inside: avoid;
  }

  /* 🔥 FORCE PROPER PAGE START SPACING */
  .ledger-print table {
    margin: 0 !important;
  }

  /* 🔥 ADD SPACE ONLY WHEN NEW PAGE STARTS */
  .ledger-print thead {
    display: table-header-group;
  }

}
@media print {

  .ledger-print {
    position: static !important;
  }

  /* 🔥 ONLY add space AFTER first page */
  .ledger-print table {
    margin-top: 0 !important;
  }

  .ledger-print table + table {
    margin-top: 10mm !important;
  }

  .ledger-print tr {
    page-break-inside: avoid;
  }

}
    @media print {

  /* ===== PAGE SETUP ===== */
  @page {
    size: A4 portrait;
    margin: 0 !important;   /* 🔥 important for case layout */
  }

  html, body {
    margin: 0 !important;
    padding: 0 !important;
    background: #fff !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* ===== HIDE UI ===== */
  .no-print, header, aside, button, input, textarea, select, footer {
    display: none !important;
  }

  body * {
    visibility: hidden !important;
  }

  .print-container,
  .print-container *,
  .ledger-print,
  .ledger-print * {
    visibility: visible !important;
  }

  /* ================= CASE FILE (FIXED PERFECT) ================= */
  .print-container {
    position: fixed !important;   /* 🔥 IMPORTANT */
    top: 0;
    left: 0;
    right: 0;

    width: 200mm !important;
    height: 287mm !important;

    margin: 0 auto !important;
    padding: 10mm !important;

    background: #fff !important;
    border: none !important;
    box-shadow: none !important;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* grid fix */
  .print-container .grid { display: grid !important; }
  .print-container .grid-cols-12 { grid-template-columns: repeat(12, 1fr) !important; }
  .print-container .col-span-7 { grid-column: span 7 / span 7 !important; }
  .print-container .col-span-5 { grid-column: span 5 / span 5 !important; }

  /* ================= LEDGER (MULTI PAGE PERFECT) ================= */
  .ledger-print {
  margin-top: 0 !important;
  padding-top: 0 !important;
}
.ledger-print {
  position: absolute !important;   /* ✅ BEST BALANCE */
  top: 0 !important;

  width: 100% !important;
  max-width: 100% !important;

  margin: 0 !important;
  padding: 5mm !important;

  border: none !important;
  box-shadow: none !important;
}
  

  .ledger-print table {
    width: 100% !important;
    border-collapse: collapse !important;
    table-layout: auto !important;   /* 🔥 IMPORTANT FIX */
  }

  .ledger-print thead {
    display: table-header-group !important;
  }

  .ledger-print tr {
    page-break-inside: avoid;
  }

  .ledger-print th,
  .ledger-print td {
    border: 1px solid #000;
    padding: 6px;
    font-size: 11px;
    word-break: break-word;
  }

  /* ===== REMOVE APP LAYOUT ===== */
  main,
  .App,
  .flex,
  .min-h-screen {
    display: block !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* ===== TEXT FIX ===== */
  .print-only {
    display: block !important;
    white-space: pre-wrap !important;
    word-break: break-word !important;
  }
}
    }
  `
      }} />
    </div>
  );

};

export default App;