/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_putstr_non_printable.c                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: dohyulee <dohyulee@student.42seoul.kr>     +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/09/18 21:27:40 by dohyulee          #+#    #+#             */
/*   Updated: 2021/09/22 00:46:57 by dohyulee         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <unistd.h>

int	is_char_printable(char c)
{
	return (c >= ' ' && c < 127);
}

void	ft_putstr_non_printable(char *str)
{
	char			*hexa;
	int				i;
	unsigned char	curr;

	hexa = "0123456789abcdef";
	i = 0;
	while (1)
	{
		curr = (unsigned char)str[i];
		if (curr == '\0')
			break ;
		if (is_char_printable(curr))
			write(1, &curr, 1);
		else
		{
			write(1, "\\", 1);
			write(1, &hexa[curr / 16], 1);
			write(1, &hexa[curr % 16], 1);
		}
		i++;
	}
}
