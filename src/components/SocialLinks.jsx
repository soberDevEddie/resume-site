import Icon from './Icon'
import resume from '../data/resume'

export default function SocialLinks({ className = '' }) {
  if (!resume.socials.length) return null
  return (
    <ul className={`list-unstyled ${className}`}>
      {resume.socials.map((s) => (
        <li className="social" key={s.label}>
          <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
            <Icon name={s.icon} size={30} />
          </a>
        </li>
      ))}
    </ul>
  )
}
