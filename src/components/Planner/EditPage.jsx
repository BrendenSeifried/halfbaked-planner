import React from 'react';
import styles from './AddEntry.css';

export default function EditPage() {
  return (
    <section className={styles.formWrapper}>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Plan something"
          value={formState.title}
          onChange={handleFormChange}
          className={styles.input}
        />
        <input
          type="date"
          name="date"
          aria-label="Due date"
          value={formState.date || ''}
          onChange={handleFormChange}
          className={styles.input}
        />
        <textarea
          name="content"
          placeholder="A brief description of what you're planning"
          value={formState.content}
          onChange={handleFormChange}
          className={styles.content}
        />
        <button type="submit">Add Entry</button>
      </form>
      <p className={styles.error}>{formError || ' '}</p>
    </section>
  );
}
