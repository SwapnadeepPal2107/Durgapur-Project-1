import React from 'react';
import { CheckCircleIcon, ShieldIcon, TargetIcon, ClockIcon, UsersIcon, AwardIcon } from 'lucide-react';
const values = [{
  icon: CheckCircleIcon,
  text: 'High Quality Services'
}, {
  icon: ShieldIcon,
  text: 'Confidentiality & Integrity'
}, {
  icon: TargetIcon,
  text: 'Customer-Focused Solutions'
}, {
  icon: AwardIcon,
  text: 'Government Approved'
}, {
  icon: ClockIcon,
  text: 'Rapid Project Mobilization'
}, {
  icon: UsersIcon,
  text: 'Expert Professionals'
}];
export function ValuesSection() {
  return <section className="py-20 bg-[#0C2340] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We Deliver
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Committed to accuracy in data, integrity in practice, and innovation
            in technology
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
          const Icon = value.icon;
          return <div key={index} className="flex items-center gap-4 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all">
                <div className="flex-shrink-0">
                  <Icon className="w-12 h-12 text-[#D4AF37]" />
                </div>
                <p className="text-lg font-semibold">{value.text}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}