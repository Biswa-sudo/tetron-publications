'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AddJournalPage() {
  const router = useRouter();

  // ---------- Authentication check ----------
  // useEffect(() => {
  //   const token = localStorage.getItem('adminToken');
  //   if (!token) {
  //     router.push('/admin/login');
  //   }
  // }, [router]);

  // ---------- Fetch categories from backend ----------
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoryError, setCategoryError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        console.log('🔍 Fetching categories from /api/categories...');
        const res = await fetch('/api/categories');
        console.log('📡 Response status:', res.status);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('✅ Categories received:', data);
        console.log('📊 Number of categories:', data.length);
        
        if (Array.isArray(data)) {
          setCategories(data);
        } else {
          console.error('❌ Data is not an array:', data);
          setCategories([]);
        }
      } catch (error) {
        console.error('❌ Failed to fetch categories:', error);
        setCategoryError(error.message);
        setCategories([]);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  // ---------- Top section state ----------
  const [pageTitle, setPageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle checkbox change
  const handleCategoryChange = (termTaxonomyId) => {
    setSelectedCategories(prev => {
      if (prev.includes(termTaxonomyId)) {
        return prev.filter(id => id !== termTaxonomyId);
      } else {
        return [...prev, termTaxonomyId];
      }
    });
  };

  // Handle parent category change (select all children)
  const handleParentCategoryChange = (parentId, childIds) => {
    const allIds = [parentId, ...childIds];
    const allSelected = allIds.every(id => selectedCategories.includes(id));
    
    if (allSelected) {
      // Uncheck all
      setSelectedCategories(prev => prev.filter(id => !allIds.includes(id)));
    } else {
      // Check all
      setSelectedCategories(prev => {
        const newSelection = [...prev];
        allIds.forEach(id => {
          if (!newSelection.includes(id)) {
            newSelection.push(id);
          }
        });
        return newSelection;
      });
    }
  };

  // ---------- Section 1: Google Scholar Citation Tags ----------
  const [citationTitle, setCitationTitle] = useState('');
  const [citationAuthor, setCitationAuthor] = useState('');
  const [citationPubDate, setCitationPubDate] = useState('');
  const [journalTitle, setJournalTitle] = useState('');
  const [volume, setVolume] = useState('');
  const [issue, setIssue] = useState('');
  const [firstPage, setFirstPage] = useState('');
  const [lastPage, setLastPage] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [abstractUrl, setAbstractUrl] = useState('');
  const [language, setLanguage] = useState('');

  // ---------- Section 2: Google Scholar Metadata ----------
  const [metaJournalName, setMetaJournalName] = useState('');
  const [metaVolume, setMetaVolume] = useState('');
  const [metaIssue, setMetaIssue] = useState('');
  const [metaFirstPage, setMetaFirstPage] = useState('');
  const [metaLastPage, setMetaLastPage] = useState('');
  const [metaPdfUrl, setMetaPdfUrl] = useState('');

  // ---------- Featured Image ----------
  const [featuredImage, setFeaturedImage] = useState(null);

  // ---------- UI state ----------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // ---------- Handlers ----------
  const handleImageChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    if (!pageTitle.trim()) {
      setMessage({ type: 'error', text: 'Please enter a page title.' });
      return;
    }

    setIsSubmitting(true);

    try {
      const token = localStorage.getItem('adminToken');

      const postData = {
        title: pageTitle,
        excerpt: description,
        categories: selectedCategories,
        status: 'publish',
        citation_title: citationTitle,
        citation_author: citationAuthor,
        citation_publication_date: citationPubDate,
        journal_title: journalTitle,
        volume: volume,
        issue: issue,
        first_page: firstPage,
        last_page: lastPage,
        pdf_url: pdfUrl,
        abstract_url: abstractUrl,
        language: language,
        meta_journal_name: metaJournalName,
        meta_volume: metaVolume,
        meta_issue: metaIssue,
        meta_first_page: metaFirstPage,
        meta_last_page: metaLastPage,
        meta_pdf_url: metaPdfUrl,
      };

      console.log('📤 Submitting journal:', postData);

      const response = await fetch('/api/journals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      const data = await response.json();
      console.log('📥 Response:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to publish journal.');
      }

      setMessage({ type: 'success', text: `Journal "${pageTitle}" published successfully!` });

      // Reset all fields
      setPageTitle('');
      setDescription('');
      setSelectedCategories([]);
      setCitationTitle('');
      setCitationAuthor('');
      setCitationPubDate('');
      setJournalTitle('');
      setVolume('');
      setIssue('');
      setFirstPage('');
      setLastPage('');
      setPdfUrl('');
      setAbstractUrl('');
      setLanguage('');
      setMetaJournalName('');
      setMetaVolume('');
      setMetaIssue('');
      setMetaFirstPage('');
      setMetaLastPage('');
      setMetaPdfUrl('');
      setFeaturedImage(null);
      document.getElementById('imageInput').value = '';

    } catch (error) {
      console.error('❌ Submission error:', error);
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------- Render ----------
  return (
    <>
      <Header />
      <section
        className="py-3 text-white"
        style={{ background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)' }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="mb-0">Submit New Journal</h2>
          <button
            onClick={handleLogout}
            className="btn btn-outline-light btn-sm"
          >
            Logout
          </button>
        </div>
      </section>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0">
              <div className="card-body p-4">
                {message.text && (
                  <div
                    className={`alert ${
                      message.type === 'success' ? 'alert-success' : 'alert-danger'
                    }`}
                    role="alert"
                  >
                    {message.text}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* TOP SECTION: Page Title, Description, Categories */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      📄 Page Information
                    </h5>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label htmlFor="pageTitle" className="form-label fw-semibold">
                          Page Title *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="pageTitle"
                          value={pageTitle}
                          onChange={(e) => setPageTitle(e.target.value)}
                          placeholder="Enter page title"
                          required
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label htmlFor="description" className="form-label fw-semibold">
                          Description (Excerpt)
                        </label>
                        <textarea
                          className="form-control"
                          id="description"
                          rows="3"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Brief description of the journal"
                        />
                      </div>

                      <div className="col-12 mb-3">
                        <label className="form-label fw-semibold">Categories</label>
                        {loadingCategories ? (
                          <div className="text-muted">Loading categories...</div>
                        ) : categoryError ? (
                          <div className="text-danger">Error loading categories: {categoryError}</div>
                        ) : categories.length === 0 ? (
                          <div className="text-muted">No categories found</div>
                        ) : (
                          // <div className="categories-container" style={{ maxHeight: '300px', overflowY: 'auto', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
                          //   {categories.map((cat) => (
                          //     <div key={cat.term_id} className="category-group mb-3">
                          //       <div className="form-check">
                          //         <input
                          //           type="checkbox"
                          //           className="form-check-input"
                          //           id={`cat-${cat.term_id}`}
                          //           checked={selectedCategories.includes(cat.term_taxonomy_id)}
                          //           onChange={() => {
                          //             // If category has children, select/deselect all
                          //             if (cat.children && cat.children.length > 0) {
                          //               const childIds = cat.children.map(c => c.term_taxonomy_id);
                          //               handleParentCategoryChange(cat.term_taxonomy_id, childIds);
                          //             } else {
                          //               handleCategoryChange(cat.term_taxonomy_id);
                          //             }
                          //           }}
                          //         />
                          //         <label className="form-check-label fw-bold" htmlFor={`cat-${cat.term_id}`}>
                          //           {cat.name}
                          //         </label>
                          //         <span className="badge bg-secondary ms-2">{cat.children ? cat.children.length : 0}</span>
                          //       </div>
                                
                          //       {/* Children (sub-categories) */}
                          //       {cat.children && cat.children.length > 0 && (
                          //         <div className="ms-4 mt-1" style={{ paddingLeft: '20px', borderLeft: '2px solid #dee2e6' }}>
                          //           {cat.children.map((child) => (
                          //             <div className="form-check" key={child.term_id}>
                          //               <input
                          //                 type="checkbox"
                          //                 className="form-check-input"
                          //                 id={`cat-${child.term_id}`}
                          //                 checked={selectedCategories.includes(child.term_taxonomy_id)}
                          //                 onChange={() => handleCategoryChange(child.term_taxonomy_id)}
                          //               />
                          //               <label className="form-check-label" htmlFor={`cat-${child.term_id}`}>
                          //                 {child.name}
                          //               </label>
                          //             </div>
                          //           ))}
                          //         </div>
                          //       )}
                          //     </div>
                          //   ))}
                          //   <div className="mt-2">
                          //     <small className="text-muted">
                          //       Selected: <span className="fw-bold">{selectedCategories.length}</span> categories
                          //     </small>
                          //     <button
                          //       type="button"
                          //       className="btn btn-sm btn-outline-secondary ms-2"
                          //       onClick={() => setSelectedCategories([])}
                          //     >
                          //       Clear All
                          //     </button>
                          //   </div>
                          // </div>
                          // In the categories section, update the rendering

<div className="categories-container" style={{ maxHeight: '300px', overflowY: 'auto', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
  {categories.map((cat) => (
    <div key={cat.term_id} className="category-group mb-3">
      {/* Parent Category Checkbox */}
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={`cat-${cat.term_id}`}
          checked={selectedCategories.includes(cat.term_taxonomy_id)}
          onChange={() => {
            if (cat.children && cat.children.length > 0) {
              const allChildIds = [];
              const collectIds = (items) => {
                items.forEach(item => {
                  allChildIds.push(item.term_taxonomy_id);
                  if (item.children && item.children.length > 0) {
                    collectIds(item.children);
                  }
                });
              };
              collectIds(cat.children);
              handleParentCategoryChange(cat.term_taxonomy_id, allChildIds);
            } else {
              handleCategoryChange(cat.term_taxonomy_id);
            }
          }}
        />
        <label className="form-check-label fw-bold" htmlFor={`cat-${cat.term_id}`}>
          {cat.name}
        </label>
        <span className="badge bg-secondary ms-2">{cat.children ? cat.children.length : 0}</span>
      </div>
      
      {/* Children */}
      {cat.children && cat.children.length > 0 && (
        <div className="ms-4 mt-1" style={{ paddingLeft: '20px', borderLeft: '2px solid #dee2e6' }}>
          {cat.children.map((child) => (
            <div key={child.term_id} className="category-group mb-2">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id={`cat-${child.term_id}`}
                  checked={selectedCategories.includes(child.term_taxonomy_id)}
                  onChange={() => {
                    if (child.children && child.children.length > 0) {
                      const childIds = child.children.map(c => c.term_taxonomy_id);
                      handleParentCategoryChange(child.term_taxonomy_id, childIds);
                    } else {
                      handleCategoryChange(child.term_taxonomy_id);
                    }
                  }}
                />
                <label className="form-check-label" htmlFor={`cat-${child.term_id}`}>
                  {child.name}
                </label>
              </div>
              
              {/* Grandchildren (e.g., Archives, Article In Press, Current) */}
              {child.children && child.children.length > 0 && (
                <div className="ms-4 mt-1" style={{ paddingLeft: '20px', borderLeft: '2px solid #dee2e6' }}>
                  {child.children.map((grandchild) => (
                    <div className="form-check" key={grandchild.term_id}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`cat-${grandchild.term_id}`}
                        checked={selectedCategories.includes(grandchild.term_taxonomy_id)}
                        onChange={() => handleCategoryChange(grandchild.term_taxonomy_id)}
                      />
                      <label className="form-check-label" htmlFor={`cat-${grandchild.term_id}`}>
                        {grandchild.name}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  ))}
  
  <div className="mt-2">
    <small className="text-muted">
      Selected: <span className="fw-bold">{selectedCategories.length}</span> categories
    </small>
    <button
      type="button"
      className="btn btn-sm btn-outline-secondary ms-2"
      onClick={() => setSelectedCategories([])}
    >
      Clear All
    </button>
  </div>
</div>
                        )}
                        <div className="form-text">Select all categories that apply to this journal</div>
                      </div>
                    </div>
                  </div>

                  {/* SECTION 1: Google Scholar Citation Tags */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      📚 Google Scholar Citation Tags
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationTitle" className="form-label fw-semibold">
                          Citation Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="citationTitle"
                          value={citationTitle}
                          onChange={(e) => setCitationTitle(e.target.value)}
                          placeholder="Article title"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationAuthor" className="form-label fw-semibold">
                          Citation Author(s)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="citationAuthor"
                          value={citationAuthor}
                          onChange={(e) => setCitationAuthor(e.target.value)}
                          placeholder="e.g. John Doe, Jane Smith"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="citationPubDate" className="form-label fw-semibold">
                          Citation Publication Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          id="citationPubDate"
                          value={citationPubDate}
                          onChange={(e) => setCitationPubDate(e.target.value)}
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="journalTitle" className="form-label fw-semibold">
                          Journal Title
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="journalTitle"
                          value={journalTitle}
                          onChange={(e) => setJournalTitle(e.target.value)}
                          placeholder="Journal name"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="volume" className="form-label fw-semibold">
                          Volume
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="volume"
                          value={volume}
                          onChange={(e) => setVolume(e.target.value)}
                          placeholder="e.g. 12"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="issue" className="form-label fw-semibold">
                          Issue
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="issue"
                          value={issue}
                          onChange={(e) => setIssue(e.target.value)}
                          placeholder="e.g. 3"
                        />
                      </div>

                      <div className="col-md-4 mb-3">
                        <label htmlFor="firstPage" className="form-label fw-semibold">
                          First Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstPage"
                          value={firstPage}
                          onChange={(e) => setFirstPage(e.target.value)}
                          placeholder="e.g. 45"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastPage" className="form-label fw-semibold">
                          Last Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastPage"
                          value={lastPage}
                          onChange={(e) => setLastPage(e.target.value)}
                          placeholder="e.g. 67"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="pdfUrl" className="form-label fw-semibold">
                          PDF URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="pdfUrl"
                          value={pdfUrl}
                          onChange={(e) => setPdfUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="abstractUrl" className="form-label fw-semibold">
                          Abstract URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="abstractUrl"
                          value={abstractUrl}
                          onChange={(e) => setAbstractUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="language" className="form-label fw-semibold">
                          Language
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="language"
                          value={language}
                          onChange={(e) => setLanguage(e.target.value)}
                          placeholder="e.g. English"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SECTION 2: Google Scholar Metadata */}
                  <div className="bg-light p-4 rounded-3 mb-4">
                    <h5 className="fw-bold mb-3" style={{ color: '#2b1c6b' }}>
                      🔍 Google Scholar Metadata
                    </h5>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaJournalName" className="form-label fw-semibold">
                          Journal Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaJournalName"
                          value={metaJournalName}
                          onChange={(e) => setMetaJournalName(e.target.value)}
                          placeholder="Journal name (metadata)"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaVolume" className="form-label fw-semibold">
                          Volume
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaVolume"
                          value={metaVolume}
                          onChange={(e) => setMetaVolume(e.target.value)}
                          placeholder="e.g. 12"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaIssue" className="form-label fw-semibold">
                          Issue
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaIssue"
                          value={metaIssue}
                          onChange={(e) => setMetaIssue(e.target.value)}
                          placeholder="e.g. 3"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaFirstPage" className="form-label fw-semibold">
                          First Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaFirstPage"
                          value={metaFirstPage}
                          onChange={(e) => setMetaFirstPage(e.target.value)}
                          placeholder="e.g. 45"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaLastPage" className="form-label fw-semibold">
                          Last Page
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="metaLastPage"
                          value={metaLastPage}
                          onChange={(e) => setMetaLastPage(e.target.value)}
                          placeholder="e.g. 67"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label htmlFor="metaPdfUrl" className="form-label fw-semibold">
                          PDF URL
                        </label>
                        <input
                          type="url"
                          className="form-control"
                          id="metaPdfUrl"
                          value={metaPdfUrl}
                          onChange={(e) => setMetaPdfUrl(e.target.value)}
                          placeholder="https://..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Featured Image */}
                  <div className="mb-4">
                    <label htmlFor="imageInput" className="form-label fw-semibold">
                      Featured Image
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <div className="form-text">Optional – shown in the journal list.</div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2"
                    disabled={isSubmitting}
                    style={{
                      background: 'linear-gradient(to right, #2b1c6b, #b4b3e6)',
                      border: 'none',
                    }}
                  >
                    {isSubmitting ? (
                      <span className="spinner-border spinner-border-sm me-2" role="status" />
                    ) : null}
                    {isSubmitting ? 'Publishing...' : 'Publish Journal'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}