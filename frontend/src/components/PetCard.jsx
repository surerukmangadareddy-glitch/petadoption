import React from 'react';
import Icon from './Icon.jsx';
import { Badge } from './ui.jsx';

export default function PetCard({ pet, favorite, onToggleFavorite, onView, onChat }) {
  return (
    <article className="pet-card">
      <div className="pet-photo">
        <img src={pet.photoUrl} alt={pet.name} loading="lazy" />
        <Badge tone={pet.available === false ? 'danger' : 'success'}>{pet.available === false ? 'Adopted' : 'Available'}</Badge>
        {onToggleFavorite && (
          <button className={`fav-btn ${favorite ? 'on' : ''}`} onClick={() => onToggleFavorite(pet.id)}
            aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'} aria-pressed={!!favorite}>
            <Icon name="heart" size={18} style={{ fill: favorite ? 'currentColor' : 'none' }} />
          </button>
        )}
      </div>
      <div className="pet-body">
        <div className="pet-title">
          <h3>{pet.name}</h3>
          <span className="muted small">{pet.gender}</span>
        </div>
        <p className="muted small">{pet.breed} · {pet.age} {pet.age === 1 ? 'yr' : 'yrs'}</p>
        <p className="pet-loc small"><Icon name="pin" size={14} /> {pet.location || 'Local shelter'}</p>
        <div className="chip-row">
          {pet.personalityTags?.split('·').slice(0, 3).map((t, i) => <span key={i} className="chip">{t.trim()}</span>)}
        </div>
        <div className="pet-actions">
          <button className="btn btn-primary btn-sm" onClick={() => onView(pet)}>View details</button>
          {onChat && <button className="btn btn-ghost btn-sm" onClick={() => onChat(pet)}><Icon name="message" size={15} /> Chat</button>}
        </div>
      </div>
    </article>
  );
}
