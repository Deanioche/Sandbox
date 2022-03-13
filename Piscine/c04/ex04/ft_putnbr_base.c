/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putnbr_base.c                                   :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/23 17:11:55 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/23 17:28:05 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include<unistd.h>

int	ft_strlen(char *str)
{
	int		i;

	i = 0;
	while (str[i] != 0)
		i++;
	return (i);
}

int	is_valid(char *base)
{
	int		len;
	int		i;
	int		j;

	len = ft_strlen(base);
	if (len <= 1)
		return (1);
	i = 0;
	while (base[i] != '\0')
	{
		if (base[i] < 32 || base[i] > 126)
			return (1);
		if (base[i] == '+' || base[i] == '-')
			return (1);
		j = i + 1;
		while (base[j] != 0)
		{
			if (base[i] == base[j])
				return (1);
			j++;
		}
		i++;
	}
	return (0);
}

void	ft_putnbr_base(int nbr, char *base)
{
	unsigned int	unsigned_nbr;
	unsigned int	numeral;

	if (is_valid(base))
		return ;
	if (nbr < 0)
	{
		unsigned_nbr = (unsigned int)(nbr * (-1));
		write(1, "-", 1);
	}
	else
		unsigned_nbr = (unsigned int)nbr;
	numeral = ft_strlen(base);
	if (unsigned_nbr >= numeral)
	{
		ft_putnbr_base(unsigned_nbr / numeral, base);
		ft_putnbr_base(unsigned_nbr % numeral, base);
	}
	else
		write(1, &base[unsigned_nbr], 1);
}
